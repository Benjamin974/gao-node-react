const Sequelize = require('sequelize');
const path = 'mysql://root:password@localhost:3306/node_gao';

const Ordi = require('../models/ordinateurModel');
const Attribution = require('../models/attributionModel');
const Client = require('../models/clientModel')

Ordi.hasMany(Attribution);
Attribution.belongsTo(Ordi);
Client.hasMany(Attribution);
Attribution.belongsTo(Client);
var ITEM_PER_PAGE = 3;

/** Get all information about computers
 * @name getComputers
 * @function
 * @throws Will throw an error if one error occursed
 */
exports.getOrdinateurs = async (req, res, next) => {
  const date = req.query.dates;
  const ordinateurs = await Ordi.findAll({

    attributes: ['id', 'name'],
    include: [
      {
        model: Attribution,
        attributes: ['id', 'dates', 'heures'],
        required: false,
        where: {
          dates: date
        },
        include: [{
          model: Client,
          attributes: ['id', 'firstname', 'name'],
          required: false
        }]
      }
    ]
  });

    return res.status(200).json({
      ordinateurs
    });


}

