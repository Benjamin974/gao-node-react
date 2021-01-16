const { Sequelize, DataTypes, Model } = require('sequelize');

const path = 'mysql://root:password@localhost:3306/node_gao';

const sequelize = new Sequelize(path, {
  operatorsAliases: false
});

const Attribution = sequelize.define('attributions', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  clientId: Sequelize.INTEGER,
  ordinateurId: Sequelize.INTEGER,
  dates: Sequelize.DATEONLY,
  heures: Sequelize.STRING,
},  {timestamps: true});

module.exports = Attribution;