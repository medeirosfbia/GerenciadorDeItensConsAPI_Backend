const db = require('./db');

const Categories = db.sequelize.define('Category', {
    name: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: db.Sequelize.STRING,
        allowNull: true
    }
});

Categories.sync({ alter: true })
    .then(() => console.log('Category table created successfully'))
    .catch(err => console.error('Error creating Category table:', err));

module.exports = Categories;
