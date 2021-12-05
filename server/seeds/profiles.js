const profilesData = [
  {
    id: 1,
    firstName: "Lida",
    lastName: "Lau",
    phone: "604-123-4567",
    email: "test@email.com",
    stylist: "Michael",
    dateVisited: "",
    image: "",
  },
];

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("profiles")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("profiles").insert(profilesData);
    });
};
