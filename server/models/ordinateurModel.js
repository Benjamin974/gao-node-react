const { Sequelize } = require('sequelize');
const path = 'mysql://root:password@localhost:3306/node_gao';

const sequelize = new Sequelize(path, {
  operatorsAliases: false
});


let Ordinateurs = sequelize.define('ordinateurs', {
  name: Sequelize.STRING
});


module.exports = Ordinateurs;