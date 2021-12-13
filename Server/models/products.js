const Sequalize = require("sequelize");
const db = require("../config/appConfig");
const Products = db.define("products", {
    productId: {
        type: Sequalize.INTEGER,
        autoIncrement: true,
        require: true,
        allowNull: false,
        primaryKey: true,
    },
    productName: {
        type: Sequalize.STRING,
        require: true,
        allowNull: false,
    },
    productImage: {
        type: Sequalize.BLOB,
        require: true,
        allowNull: false,
    },
    availableQuantity: {
        type: Sequalize.INTEGER,
        require: true,
        allowNull: false,
    },
    productPrice: {
        type: Sequalize.INTEGER,
        require: true,
        allowNull: false,
    },
    describtion: {
        type: Sequalize.STRING,
        require: true,
        allowNull: false,
    },
});

module.exports = Products;
