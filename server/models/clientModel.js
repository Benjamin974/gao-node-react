const { Sequelize } = require('sequelize');
const path = 'mysql://root:password@localhost:3306/node_gao';

const sequelize = new Sequelize(path, {
  operatorsAliases: false
});


let Clients = sequelize.define('clients', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: Sequelize.STRING,
  firstname: Sequelize.STRING
});


module.exports = Clients;