const connection = require("../database/connection"); // Importando a conexão com o dB
const crypto = require("crypto");

module.exports = {
  async index(request, response) {
    const ongs = await connection("ongs").select("*");
    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString("HEX"); // Gerando o id de cada ong de maneira criptografada

    await connection("ongs").insert({ id, name, email, whatsapp, city, uf });

    return response.json({ id }); // Retornar apenas o id, pois é dele que a ONG precisará para adentrar na aplicação
  }
};
