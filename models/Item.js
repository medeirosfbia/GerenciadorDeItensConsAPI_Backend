const db = require('./db');

const Item = db.sequelize.define('Item', {
    name: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: db.Sequelize.FLOAT,
        allowNull: false
    },
    used: {
        type: db.Sequelize.BOOLEAN,
        defaultValue: false
    },
    fk_category: {
        type: db.Sequelize.INTEGER,
        references: {
            model: 'Categories',
            key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: false
    }
});

Item.sync({ alter: true })
    .then(() => console.log('Item table created successfully'))
    .catch(err => console.error('Error creating Item table:', err));

module.exports = Item;
