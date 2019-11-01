module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'vuetest',
        user: process.env.DB_USER || 'vuetest',
        password: process.env.DB_PASS || 'vuetest',
        options: {
            dialect: process.env.DIALECT || ' sqlite',
            host: process.env.HOST || 'localhost',
            storage: './vuetest.sqlite'
        }
    }
}