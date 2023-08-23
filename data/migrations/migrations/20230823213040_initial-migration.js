/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema
  .createTable('recipes', tbl => {
    tbl.increments('reciple_id')
    tbl.string('recipe_name', 200).notNullable().unique()
  })
  .createTable('ingredients', tbl => {
    tbl.increments('ingredient_id')
    tbl.string('ingredients_name', 200).notNullable().unique()
    tbl.string('ingredient_unit', 50)
  })
  .createTable('steps', tbl => {
    tbl.increments()
  })
  .createTable('step_ingredients', tbl => {
    tbl.increments()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
  
  .dropTableIfExists('step_ingredients')
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
};
