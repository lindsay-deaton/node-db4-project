
exports.up = function(knex) {
  return knex.schema.createTable("Venues", tbl => {
    tbl.increments();
    tbl.string("Venue_Name", 128).notNullable().unique();
    tbl.integer("Total_Occupancy").notNullable();
  })
    .createTable("Stages", tbl => {
      tbl.increments();
      tbl.string("Stage_Name", 128).notNullable().unique();
      tbl.integer("Seat_Occupancy").notNullable();
      tbl.boolean("Open_Lawn");
      tbl.integer("Venue_ID").unsigned().notNullable().references(id).inTable("Venues")
    })
  .createTable("")
};

exports.down = function(knex) {
  
};
