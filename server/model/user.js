const database = require("../database/connection");
const tableName = "users";

const create = (user) => database(tableName).insert(user);

module.exports = {
  create,
};
