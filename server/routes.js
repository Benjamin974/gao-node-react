
/** Routes to desktops
 * @module routers/desktop
 * @requires express express.Router()
 */

const ordiController = require('./controller/ordiController');
const attrController = require('./controller/attrController');
const clientController = require('./controller/clientController');

const router = require('express').Router();

router.get('/computers', ordiController.getOrdinateurs);
router.get('/clients', clientController.getClients);


router.post('/attr', attrController.postAttr);
router.delete('/attr/:id', attrController.deleteAttribution);
module.exports = router;