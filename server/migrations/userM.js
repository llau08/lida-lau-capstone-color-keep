exports.up = function (knex) {
  return knex.scheme.createTable("users", (table) => {
    table.increments("id");
    table.string("userName").notNullable();
    table.string("password").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};