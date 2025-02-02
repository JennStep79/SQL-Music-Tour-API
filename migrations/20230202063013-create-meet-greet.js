'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meet_greet', {
      event_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      band_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      meet_start_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      meet_end_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      meet_greet_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meet_greet');
  }
};