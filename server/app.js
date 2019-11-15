import Server from "./classes/Server";


const start = async() =>{
    try{
        //start the application
        await Server.init();
    }catch(err){

        throw err;
        process.exit(1);
    }
}

start();