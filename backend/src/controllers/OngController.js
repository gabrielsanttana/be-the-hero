const generateUniqueID = require('../utils/generateUniqueID');

const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  },

  async store(req, res) {
    const {name, email, whatsapp, city, uf} = req.body;

    const id = generateUniqueID();

    await connection('ongs').insert({
      id,
      name, 
      email,
      whatsapp, 
      city,
      uf,
    });

    return res.json({id});
  },
};