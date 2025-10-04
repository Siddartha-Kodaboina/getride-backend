const rideRequestService = require('../services/rideRequestService');

class RideRequestController {
  async create(req, res) {
    try {
      const rideRequest = await rideRequestService.createRideRequest({
        ...req.body,
        riderId: req.user.id
      });
      res.status(201).json(rideRequest);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const rideRequest = await rideRequestService.getRideRequestById(req.params.id);
      res.json(rideRequest);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const filters = {
        status: req.query.status,
        riderId: req.query.riderId
      };
      const rideRequests = await rideRequestService.getAllRideRequests(filters);
      res.json(rideRequests);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const updated = await rideRequestService.updateRideRequest(req.params.id, req.body);
      res.json(updated);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const result = await rideRequestService.deleteRideRequest(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new RideRequestController();
