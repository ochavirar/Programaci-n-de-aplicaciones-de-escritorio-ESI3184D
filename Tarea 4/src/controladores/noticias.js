const Noticia = require('./../modelos/noticia');

const controladorNoticias = {
    listar: function(req, res){
        Noticia.buscar()
            .then(response => {
                console.log(response);
                res.render('noticias', {noticias: response});
            })
            .catch(error => {
                res.status(400).send(error);
            });
    }
}

module.exports = controladorNoticias;