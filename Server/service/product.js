const productDAO = require("../DAO/product");

const AddProduct = async (req, res) => {
    var finalResult;
    try {
        if (
            req.body.product.productName != null &&
            req.body.product.productImage != null &&
            req.body.product.describtion != null &&
            req.body.product.productPrice != null &&
            req.body.product.availableQuantity != null
        ) {
            const resData = await productDAO.addProduct(req.body.product);
            console.log(resData);
            if (resData.status !== 200) {
                finalResult = {
                    status: 204,
                    message: "Can't able to insert",
                    data: resData.data,
                };
                res.send(finalResult);
            } else {
                finalResult = {
                    status: 200,
                    message: "Successfully Added",
                    data: resData.data,
                };
                res.send(finalResult);
            }
        } else {
            finalResult = {
                status: 200,
                message: "Invalid Parameters.Enter all",
            };
            res.send(finalResult);
        }
    } catch (err) {
        finalResult = {
            status: 500,
            message: "Network Error",
            err: err,
        };
        res.send(finalResult);
    }
};

const GetProducts = async (req, res) => {
    try {
        let resData = await productDAO.getProduct();
        if (resData.status !== 200) {
            finalResult = {
                status: 204,
                message: "Can't able to insert",
                data: resData.data,
            };
            res.send(finalResult);
        } else {
            finalResult = {
                status: 200,
                message: "Successfully Added",
                data: resData.data,
            };
            res.send(finalResult);
        }
    } catch (err) {
        finalResult = {
            status: 500,
            message: "Network Error",
            err: err,
        };
        res.send(finalResult);
    }
};
const UpdateProduct = async (req, res) => {
    var finalResult;
    try {
        if (req.body.product.productId !== null) {
            let resData = await productDAO.updateProduct(req.body.product);
            if (resData.status === 204) {
                finalResult = {
                    status: 204,
                    message: "Can't able to update",
                };
                res.send(finalResult);
            } else if (resData.status === 400) {
                finalResult = {
                    status: 400,
                    message: "Something Went wrong",
                };
            } else {
                finalResult = {
                    status: 200,
                    message: "Successfully Updated",
                };
                res.send(finalResult);
            }
        } else {
            finalResult = {
                status: 200,
                message: "Invalid Parameters.Enter all",
            };
            res.send(finalResult);
        }
    } catch (err) {
        finalResult = {
            status: 500,
            message: "Network Error",
            err: err,
        };
        res.send(finalResult);
    }
};
const DeleteProduct = async (req, res) => {
    var finalResult;
    try {
        if (req.body.productId !== null) {
            let resData = await productDAO.deleteProduct(req.body.productId);
            if (resData.status === 204) {
                finalResult = {
                    status: 204,
                    message: "Can't able to update",
                };
                res.send(finalResult);
            } else if (resData.status === 400) {
                finalResult = {
                    status: 400,
                    message: "Something Went wrong",
                };
            } else {
                finalResult = {
                    status: 200,
                    message: "Successfully Deleted",
                };
                res.send(finalResult);
            }
        } else {
            finalResult = {
                status: 200,
                message: "Invalid Parameters.Enter all",
            };
            res.send(finalResult);
        }
    } catch (err) {
        finalResult = {
            status: 500,
            message: "Network Error",
            err: err,
        };
        res.send(finalResult);
    }
};
module.exports = { AddProduct, GetProducts, UpdateProduct, DeleteProduct };
