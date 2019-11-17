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
        story_url: {
            type: "String"
        },
        created_at: {
            type: "String"
        },
        author: {
            type: "String"
        },
        story_id: {
            type: "String",
        }
        })

        

        HackerNewsModel.model= mongoose.model('HackerNews',hackerNewsSchema);  

        return hackerNewsSchema
    }, 
    async findAll() {
        
        return await HackerNewsModel.model.find();
    },  
    async createBulk(bulkNews) {

        await HackerNewsModel.model.insertMany(bulkNews, function (err, docs) {
            if (err){ 
                return console.error(err);
            } else {
              console.log("Inserted many");
            }
          });
        
    },
    async remove(id) { 
        await HackerNewsModel.model.findOneAndRemove({ _id: id }).exec(); 
    }
  
}


export default HackerNewsModel;