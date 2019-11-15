import Database from "../classes/Database";

import mongoose, {Schema} from "mongoose";

const HackerNewsModel = {
    init(){
        const db = Database.getConnection();
        
        const hackerNewsSchema = new mongoose.Schema({            
        name: {
            type: "String"
        },
        received: {
            type: "Boolean", 
            default: false
        }
        })

        HackerNewsModel.setModel(db.connect.model("HackersNews",hackerNewsSchema));
        
        return hackerNewsSchema
    }
}


export default HackerNewsModel;