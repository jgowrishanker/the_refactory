/*eslint no-unused-vars: 0*/

exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists("projects" ,function (table) {
        table.increments();
        table.string("name").defaultTo("");
        table.string("description").defaultTo("");
        table.string("status").defaultTo("");
        //new, in progress, closed
        table.string("avatar").defaultTo("");
        table.timestamps(true, true);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("projects");
};