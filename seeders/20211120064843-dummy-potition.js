'use strict';

const data = require('./data/positions.json')
const json = data.map((el) => {
  el.createdAt = new Date();
  el.updatedAt = new Date();
  el.id_position = el.id
  delete el.created_at
  delete el.id
  return el
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('positions', json, {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('positions', null, {})
  }
};
