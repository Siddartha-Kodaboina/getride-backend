const rideRequestRepository = require('../repositories/rideRequestRepository');

class RideRequestService {
  async createRideRequest(data) {
    // Validate data
    if (!data.fromLocation || !data.toLocation || !data.requestedDateTime || !data.maxPrice) {
      throw new Error('Missing required fields');
    }

    return await rideRequestRepository.create({
      ...data,
      status: 'open'
    });
  }

  async getRideRequestById(id) {
    const rideRequest = await rideRequestRepository.findById(id);
    if (!rideRequest) {
      throw new Error('Ride request not found');
    }
    return rideRequest;
  }

  async getAllRideRequests(filters) {
    return await rideRequestRepository.findAll(filters);
  }

  async updateRideRequest(id, data) {
    const updated = await rideRequestRepository.update(id, data);
    if (!updated) {
      throw new Error('Ride request not found');
    }
    return updated;
  }

  async deleteRideRequest(id) {
    const deleted = await rideRequestRepository.delete(id);
    if (!deleted) {
      throw new Error('Ride request not found');
    }
    return { message: 'Ride request deleted successfully' };
  }
}

module.exports = new RideRequestService();
