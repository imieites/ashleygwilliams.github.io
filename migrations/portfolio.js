//migrations.fantasy.js
exports.up = function (knex) {
  return knex.schema.
    createTable('users', function(t){
      t.increments('id');
      t.text('name').notNullable().unique();
      t.text('title');
      t.text('location');
      t.text('github');
      t.text('twitter');
    }).
    createTable('projects', function (t) {
      t.increments('id');
      t.integer('user_id').notNullable().references('id').inTable('users');
      t.text('name').notNullable().unique();
      t.text('role');
      t.text('description');
      t.text('url').notNullable();
    }).
    createTable('presentations', function (t) {
      t.increments('id');
      t.integer('user_id').notNullable().references('id').inTable('users');
      t.text('title').notNullable();
      t.text('url').notNullable();
      t.text('venue').notNullable();
      t.date('date').notNullable();
      t.text('abstract')
    }).
    createTable('community', function (t) {
      t.increments('id');
      t.integer('user_id').notNullable().references('id').inTable('users');
      t.text('name').notNullable();
      t.text('role');
      t.text('url');
      t.text('description');  
      t.date('start').notNullable();
      t.date('end');
    }).
    createTable('writing', function (t) {
      t.increments('id');
      t.integer('user_id').notNullable().references('id').inTable('users');
      t.text('title').notNullable();
      t.text('summary');
      t.text('url').notNullable();
    })
  };

exports.down = function (knex) {
  return knex.schema.
    dropTable('users').
    dropTable('projects').
    dropTable('presentations').
    dropTable('community').
    dropTable('writing');
};
