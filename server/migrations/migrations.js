exports.up = function (knex) {
  return knex.schema.createTable("profiles", (table) => {
    table.increments("id");
    table.string("firstName").notNullable();
    table.string("lastName").notNullable();
    table.string("phone").notNullable();
    table.string("email").notNullable();
    table.string("stylist").notNullable();
    table.string("dateVisited").notNullable();
    table.string("image").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("profiles");
};
