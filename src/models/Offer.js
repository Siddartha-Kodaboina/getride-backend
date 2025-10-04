const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Offer = sequelize.define('Offer', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rideRequestId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'RideRequests',
      key: 'id'
    }
  },
  driverId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  pickupTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pending', 'accepted', 'rejected'),
    allowNull: false,
    defaultValue: 'pending'
  }
}, {
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: false
});

module.exports = Offer;
