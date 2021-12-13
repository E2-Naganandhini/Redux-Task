const Products = require("../models/products");
var fs = require("fs");

const addProduct = async (data) => {
    try {
        const product = await Products.create({
            productName: data.productName,
            productImage: data.productImage,
            productPrice: data.productPrice,
            availableQuantity: data.availableQuantity,
            describtion: data.describtion,
        });
        var productJSON = product.dataValues;
        if (product.dataValues) {
            return {
                status: 200,
                data: productJSON,
            };
        } else {
            return {
                status: 204,
                message: "Can't able to create",
            };
        }
    } catch (err) {
        return {
            status: 400,
            data: err,
        };
    }
};

const getProduct = async () => {
    try {
        const products = await Products.findAll();
        let data = [];
        products.forEach((product) => {
            data.push({
                productId: product.dataValues.productId,
                productName: product.dataValues.productName,
                productImage: product.dataValues.productImage.toString(),
                productPrice: product.dataValues.productPrice,
                availableQuantity: product.dataValues.availableQuantity,
                describtion: product.dataValues.describtion,
            });
        });
        if (products.length > 0) {
            return {
                status: 200,
                message: "Successfully Get Products",
                data: data,
            };
        } else {
            return {
                status: 204,
                data: products,
            };
        }
    } catch (err) {
        return {
            status: 400,
            message: "Can't able to create",
        };
    }
};

const updateProduct = async (data) => {
    try {
        const product = await Products.update(
            {
                productName: data.productName,
                productImage: data.productImage,
                productPrice: data.productPrice,
                availableQuantity: data.availableQuantity,
                describtion: data.describtion,
            },
            {
                where: {
                    productId: data.productId,
                },
            }
        );
        if (product.length > 0) {
            return {
                status: 200,
                message: "Updated",
            };
        } else {
            return {
                status: 204,
                message: "Can't able to Update",
            };
        }
    } catch (err) {
        return {
            status: 400,
            data: err,
        };
    }
};
const deleteProduct = async (data) => {
    try {
        const task = await Products.destroy({
            where: {
                productId: data,
            },
        });
        if (task) {
            return {
                status: 200,
                message: "Successfully Deleted",
            };
        } else {
            return {
                status: 204,
                message: "Can't Able to delete",
            };
        }
    } catch (err) {
        return {
            status: 400,
            data: err,
        };
    }
};

module.exports = { addProduct, getProduct, updateProduct, deleteProduct };
