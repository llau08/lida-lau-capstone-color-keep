const database = require("../database/connection");
const tableName = "users";

const create = (user) => database(tableName).insert(user);
// const del = (id) => database(tableName).where({ id }).del();
// const findAll = () => database(tableName);
// const find = (filters) => database(tableName).where(filters);
// const findOne = (filters) => database(tableName).where(filters).first();
module.exports = {
  create,
  // del,
  // find,
  // findAll,
  // findOne,
  // update,
};
