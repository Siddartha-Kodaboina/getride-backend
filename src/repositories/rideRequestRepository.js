const { RideRequest, User, Offer } = require('../models');

class RideRequestRepository {
  async create(data) {
    return await RideRequest.create(data);
  }

  async findById(id) {
    return await RideRequest.findByPk(id, {
      include: [
        { model: User, as: 'rider', attributes: ['id', 'name', 'email', 'phone'] },
        { model: Offer, as: 'offers', include: [{ model: User, as: 'driver', attributes: ['id', 'name', 'email', 'phone'] }] }
      ]
    });
  }

  async findAll(filters = {}) {
    const where = {};
    if (filters.status) where.status = filters.status;
    if (filters.riderId) where.riderId = filters.riderId;

    return await RideRequest.findAll({
      where,
      include: [
        { model: User, as: 'rider', attributes: ['id', 'name', 'email', 'phone'] },
        { model: Offer, as: 'offers', include: [{ model: User, as: 'driver', attributes: ['id', 'name', 'email', 'phone'] }] }
      ],
      order: [['createdAt', 'DESC']]
    });
  }

  async update(id, data) {
    const rideRequest = await RideRequest.findByPk(id);
    if (!rideRequest) return null;
    return await rideRequest.update(data);
  }

  async delete(id) {
    const rideRequest = await RideRequest.findByPk(id);
    if (!rideRequest) return null;
    await rideRequest.destroy();
    return true;
  }
}

module.exports = new RideRequestRepository();
