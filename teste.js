const Sequelize = require('sequelize')
const sequelize = new Sequelize; ('mysql', 'root', 'Pcezar11@*', {
    host: "localhost",
    dialect:'mysql'
})

/*sequelize.authenticate().then(function () {
    console.log('Connected to database');
}).catch(function (err) {
    console.log("Falha ao se conectar: " + err)
})*/

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING,
    },
    conteudo: {
        type: Sequelize.TEXT

    }
})

Postagem.sync({force:true})

