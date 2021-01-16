const Sequelize = require('sequelize');

const path = 'mysql://root:password@localhost:3306/node_gao';
const sequelize = new Sequelize(path, {
  operatorsAliases: false
});


let Ordi = sequelize.define('ordinateurs', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: Sequelize.STRING
});

let ordis = [
  { name: 'Ordi 1'},
  { name: 'Ordi 2' },
  { name: 'Ordi 3'},
  { name: 'Ordi 4'},
  { name: 'Ordi 5'},
  { name: 'Ordi 6'},
];

sequelize.sync({ force: true }).then(() => {
  Ordi.bulkCreate(ordis, { validate: true }).then(() => {
      console.log('ordis created');
  }).catch((err) => {
      console.log('failed to ordis names');
      console.log(err);
  }).finally(() => {
      sequelize.close();
  });
});

let Clients = sequelize.define('clients', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: Sequelize.STRING,
  firstname: Sequelize.STRING,

});


let clients = [
  { name: 'Jean', firstname: 'I' },
  { name: 'Huge', firstname: 'II'  },
  { name: 'Fred', firstname: 'III'  },
  { name: 'Hubert', firstname: 'IV'  },
  { name: 'Allan', firstname: 'V'  },
  { name: 'Salvador', firstname: 'VI'  },
];

sequelize.sync({ force: true }).then(() => {
  Clients.bulkCreate(clients, { validate: true }).then(() => {
      console.log('clients created');
  }).catch((err) => {
      console.log('failed to clients names');
      console.log(err);
  }).finally(() => {
      sequelize.close();
  });
});


let Attributions = sequelize.define('attributions', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  dates: Sequelize.DATEONLY,
  heures: Sequelize.STRING,
}, { timestamps: true });

Attributions.drop();

Ordi.belongsToMany(Clients, { through: Attributions });
Clients.belongsToMany(Ordi, { through: Attributions });


sequelize.sync({force: true}).then(() => {

      console.log('attributions created');
  }).finally(() => {
      sequelize.close();
});
