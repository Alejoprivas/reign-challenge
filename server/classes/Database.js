import mongoose from "mongoose";
 
import properties from "../properties.js";

import HackerNewsModel from "../models/HackerNewsModel";

class Database {
    constructor(){

    }
    async init(){

        await this.authenthicate();
        /**init models **/
        HackerNewsModel.init();
 
    }

    async authenthicate(){
        try{

            console.log(`mongodb://:${properties.db_url}`)
            this.DatabaseConnection = await mongoose.connect(`mongodb://${properties.db_url}`,{useNewUrlParser:true});

 

        }catch(err){
            console.log(`Failed connection to the DB: ${err.message}`)

            console.log("Wait 5 seconds before retry");
            await new Promise(resolve => setTimeout(resolve, 5000));
            await this.authenticate();

        }
    }
   
};
export default new Database();