exports.up = function (knex) {
  return knex.schema.createTable("profiles", (table) => {
    table.increments("id");
    table.string("firstName").notNullable();
    table.string("lastName").notNullable();
    table.integer("phone").notNullable();
    table.string("email").notNullable();
    table.string("stylist").notNullable();
    table.string("dateVisited").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("profiles");
};
