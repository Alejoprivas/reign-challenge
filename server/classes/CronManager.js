import HackerNewsModel from "../models/HackerNewsModel";
import cron from "node-cron";
import https from "https";
import properties from "../properties"

class CronManager{
    init(){
        console.log("Starting Cron manager");

        const newsModel = HackerNewsModel;
        const cronManager = cron;
        const apiUrl = properties.scrapUrl;


        
        let task = cronManager.schedule('0 * * * *', () => {
            console.log("Getting hacker rank news");

                https.get(apiUrl, res => {
                    res.setEncoding("utf8");
                    let body = "";

                    res.on("data", data => {
                    body += data;
                    });

                    res.on("end", () => {
                    
                    body = JSON.parse(body);
                    HackerNewsModel.createBulk(body.hits);
                    console.log(body.hits);
                    console.log(body.hits.length);
                    });
                });

        });

        task.start();
    }


}

export default new CronManager()