import Server from "./classes/Server";
import CronManager from "./classes/CronManager";


const start = async() =>{
    try{
        
        await Server.init();
        await CronManager.init();
    }catch(err){

        throw err;
        process.exit(1);
    }
}

start();