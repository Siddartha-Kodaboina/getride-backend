const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const RideRequest = sequelize.define('RideRequest', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  riderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  fromLocation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  toLocation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  requestedDateTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  maxPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('open', 'accepted', 'completed', 'cancelled'),
    allowNull: false,
    defaultValue: 'open'
  },
  acceptedOfferId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Offers',
      key: 'id'
    }
  }
}, {
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: false
});

module.exports = RideRequest;
