import Database from "../classes/Database";

import mongoose, {Schema} from "mongoose";

const HackerNewsModel = {
    init(){
        const db = Database;
        
        const hackerNewsSchema = new mongoose.Schema({            
        story_title: {
            type: "String"
        },
        title: {
            type: "String"
        },
        created_at: {
            type: "String"
        },
        author: {
            type: "String"
        },
        received: {
            type: "Boolean", 
            default: false
        }
        })

        

        HackerNewsModel.model= mongoose.model('HackerNews',hackerNewsSchema);  

        return hackerNewsSchema
    }, 
    async findAll() {
        
        return await HackerNewsModel.model.find();
    },  
    async create(params) {
        
        return await HackerNewsModel.model.create(Object.assign({},params));
    }
  
}


export default HackerNewsModel;