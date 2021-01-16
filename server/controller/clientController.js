const Sequelize = require('sequelize');
const path = 'mysql://root:password@localhost:3306/node_gao';

const Client = require('../models/clientModel')

/** Get all information about computers
 * @name getClients
 * @function
 * @throws Will throw an error if one error occursed
 */
exports.getClients = async (req, res, next) => {

  const clients = await Client.findAll({

    attributes: ['id', 'firstname', 'name'],
   
  });

    return res.status(200).json({
      clients
    });


}

