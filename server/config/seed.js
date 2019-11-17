/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */
 
import HackerNewsModel from '../models/HackerNewsModel';
import properties from '../properties';

const start = ()=>{
    if(properties.seedDB) {
        console.log("seed database  set to truth")
        let seed = [
            {
            story_title:"This is part of the seed",
            title:null,
            created_at: '2019-11-15T23:52:48.000Z',
            author:"patcon",
            story_url:'https://www.bbc.com/news/education-50418317',
            story_id:"21544864",
            }, 
            {
            story_title: null,
            title:"This is also part of the seed",
            created_at: '2019-10-15T23:52:48.000Z',
            author:"karma",
            story_url:'https://www.bbc.com/news/education-50418317',
            story_id:"31544864",
            }, 
        ]
        let news = HackerNewsModel;
        console.log("seed")
        news.createBulk(seed);   
    }else{
        console.log("seed database not set, you can change it in the properties.js file")
    }
}

export default start
