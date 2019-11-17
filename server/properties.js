module.exports = {
	db_url: (process.env.DB_HOST || 'localhost') + ':27017/hackerNews',
    publicPath: '../client/dist',
    port: process.env.NODE_PORT || 3000,
    scrapUrl:  "https://hn.algolia.com/api/v1/search_by_date?query=nodejs",
    api: process.env.NODE_API != null ? process.env.NODE_API : '/api',
    seedDB: process.env.seedDB != false ? process.env.seedDB : false
}