const crypto = require('crypto');

export default function generateUniqueID() {
  return crypto.randomBytes(4).toString('HEX');
};