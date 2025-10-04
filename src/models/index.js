const User = require('./User');
const RideRequest = require('./RideRequest');
const Offer = require('./Offer');

// Define associations
User.hasMany(RideRequest, { foreignKey: 'riderId', as: 'rideRequests' });
RideRequest.belongsTo(User, { foreignKey: 'riderId', as: 'rider' });

User.hasMany(Offer, { foreignKey: 'driverId', as: 'offers' });
Offer.belongsTo(User, { foreignKey: 'driverId', as: 'driver' });

RideRequest.hasMany(Offer, { foreignKey: 'rideRequestId', as: 'offers' });
Offer.belongsTo(RideRequest, { foreignKey: 'rideRequestId', as: 'rideRequest' });

RideRequest.belongsTo(Offer, { foreignKey: 'acceptedOfferId', as: 'acceptedOffer' });

module.exports = {
  User,
  RideRequest,
  Offer
};
