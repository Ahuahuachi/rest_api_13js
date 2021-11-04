const Product = require("../../models/products").model;

const get = async (limit) => {
  if (limit) {
    limit = parseInt(limit);
  }
  const allProducts = await Product.find({}, null, { limit }).exec();
  return allProducts;
};

const getById = async (productId) => {
  const product = await Product.findById(productId).exec();
  return product;
};

const create = async (productData) => {
  const product = new Product(productData);
  const savedProduct = await product.save();

  return savedProduct;
};

const del = async (productId) => {
  return await Product.findByIdAndDelete(productId).exec();
};

const update = async (productId, productData) => {
  const { name, price } = productData;
  return await Product.findByIdAndUpdate(
    productId,
    {
      name,
      price,
    },
    { new: true }
  ).exec();
};

module.exports = {
  get,
  getById,
  create,
  del,
  update,
};
