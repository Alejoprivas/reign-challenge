import Server from "./classes/Server";


const start = async() =>{
    try{
        
        await Server.init();
       console.log("start");
    }catch(err){

        throw err;
        process.exit(1);
    }
}

start();