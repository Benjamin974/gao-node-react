
// import model
const Ordi = require('../models/ordinateurModel');
const Client = require('../models/clientModel');
const Attribution = require('../models/attributionModel');

// set relations
Client.hasMany(Attribution);
Ordi.hasMany(Attribution);
Attribution.belongsTo(Client);
Attribution.belongsTo(Ordi);


/** Set attribution
 * @name add
 * @function
 * @throws Will throw an error if one error occursed
 */
exports.postAttr = async (req, res, next) => {
    const { dates, heures, client_id, ordinateurId } = req.body;

    try {
        const clientExist = await Client.findOne({ where: { name: client_id } });;
        clientId = clientExist.id;
        if (!clientExist) {
            return res.status(200).json({
                success: false,
                message: 'Client inexistant',
            });
        }
        const attribution = new Attribution({ dates, heures, clientId, ordinateurId });
        const nouvelleAttribution = await attribution.save();

        const user = await Client.findOne({
            attributes: ['id', 'firstname', 'name'],
            where: {
                id: clientId
            }
        });

        const returnData = {
            id: nouvelleAttribution.id,
            dates: nouvelleAttribution.dates,
            heures: nouvelleAttribution.heures,
            client: user
        }

        return res.status(200).json({
            returnData
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: 'Ressource indisponible',
        })
    }
}


/** Remove attribution
 * @name deleteAttribution
 * @function
 * @throws Will throw an error if one error occursed
 */
exports.deleteAttribution = async (req, res, next) => {
    const id = req.params.id

    try {
        const attribution = await Attribution.findOne({
            where: { id: id }
        });
        await attribution.destroy();
        return res.status(200).json({
            success: true,
            message: 'Suppression ok',
            content: id
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            success: false,
            message: 'Ressource indisponible',
        })
    }
}