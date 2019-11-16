module.exports = (env) => {
    process.env.NODE_ENV = env
    return require('hly-webpack-builder');
} 
