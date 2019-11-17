/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */
 
import HackerNewsModel from '../models/HackerNewsModel';
import properties from '../properties';

const start = ()=>{
    if(!properties.seedDB) {
        let seed = []
        let news = HackerNewsModel;
        console.log("seed")
        news.createBulk(seed);   
    }else{
        console.log("faaa")
    }
}

export default start
