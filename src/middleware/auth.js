const config = require('../config/env');

// Dummy auth middleware for development
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token || token !== config.auth.dummyToken) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // For now, just attach a dummy user
  req.user = {
    id: 1,
    email: 'test@example.com',
    name: 'Test User',
    role: 'both'
  };

  next();
};

module.exports = { authenticate };
