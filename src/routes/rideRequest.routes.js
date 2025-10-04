const express = require('express');
const router = express.Router();
const rideRequestController = require('../controllers/rideRequestController');
const { authenticate } = require('../middleware/auth');

router.post('/', authenticate, rideRequestController.create);
router.get('/', authenticate, rideRequestController.getAll);
router.get('/:id', authenticate, rideRequestController.getById);
router.put('/:id', authenticate, rideRequestController.update);
router.delete('/:id', authenticate, rideRequestController.delete);

module.exports = router;
