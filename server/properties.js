module.exports = {
	db_url: (process.env.DB_HOST || 'localhost') + ':27017/hackerNews',
    publicPath: '../client/dist',
    port: process.env.NODE_PORT || 3000,
    api: process.env.NODE_API != null ? process.env.NODE_API : '/api'
}