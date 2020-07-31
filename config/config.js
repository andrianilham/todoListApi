module.exports = {
    //ubah DB yang sudah di bold dengan host mongodb masing-masing
    DB: process.env.HOST ? process.env.HOST : 'localhost',
    //learnit-react?retryWrites=true&w=majority',
    APP_PORT: process.env.APP_PORT? process.env.APP_PORT:80,
};