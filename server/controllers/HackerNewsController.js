import Properties from "../properties";

import HackerNewsModel from "../models/HackerNewsModel";
import mongoose,{Schema} from "mongoose";

const HackerNewsController = {
  
      
     init: router => {
       const baseUrl = `${Properties.api}/news`;
       
       // custom route
       router.get(baseUrl , HackerNewsController.get);
       router.delete(`${baseUrl}/delete/:id` , HackerNewsController.remove);
       
 
      },
      get: async (req,res) => {
        try {
          let news = await HackerNewsModel.findAll();
          
          res.send(news);
        } catch (err) {
          console.log(err)
          res.status(500).json("Error");
        }
      },
      remove: async (req,res) => {
        try { 
          let id= req.params.id
          let news = await HackerNewsModel.remove(id);
          
          res.status(200).json("success");
        } catch (err) {
          console.log(err)
          res.status(500).json("Error");
        }
      }
      /*** */
     
     
  };

export default HackerNewsController;