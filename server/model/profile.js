const database = require("../database/connection");
const tableName = "profiles";

const create = (profile) => database(tableName).insert(profile);

module.exports = {
  create,
};
