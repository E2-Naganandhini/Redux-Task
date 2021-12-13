const Sequelize = require("sequelize");

module.exports = new Sequelize("ecommerce", "root", "root", {
    host: "localhost",
    dialect: "mariadb",
    define: {
        timestamps: false,
    },
});
