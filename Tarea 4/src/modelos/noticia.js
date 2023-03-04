const axios = require('axios');
require('dotenv').config();

const Noticia = {
    buscar: () => {
        let ak = process.env.API_KEY;
        const url = "https://newsapi.org/v2/everything?q=Trump&apiKey="+ak;
        console.log(url);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(axios.get(url)
                .then(res => {
                    return res.data.articles;
                })
                .catch(error => {
                    return [];
                }));
            },1000)
        });
    }
}

module.exports = Noticia;