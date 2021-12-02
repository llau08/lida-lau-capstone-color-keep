const database = require("../database/connection");
const tableName = "profiles";

const create = (profile) => database(tableName).insert(profile);

// const del = (profile) => database(tableName).where({ id }).del(profile);

// const findAll = () => database(tableName);

// const findOne = () => database(tableName).where().first();

// const update = (id, profiles) => {
//   delete profiles.id; // not allowed to set `id`
//   return database(tableName).where({ id }).update(profiles);
// };



module.exports = {
  create,
//   del,
//   findAll,
//   findOne,
//   update,
};
