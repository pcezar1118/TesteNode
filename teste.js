const Sequelize = require('sequelize')
const sequelize = new Sequelize; ('mysql', 'root', 'Pcezar11@*', {
    host: "localhost",
    dialect:'mysql'
})

sequelize.authenticate().then(function () {
    console.log('Connected to database');
}).catch(function (err) {
    console.log("Falha ao se conectar: " + err)
})