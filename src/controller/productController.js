const Product = require('../models/product');

module.exports = {
  read: async (req, res) => {
    const products = await Product.find();
    res.render('index', { products });
  },

  insert: async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.redirect('/');
  },

  delete: async (req, res) => {
    const { id } = req.params;
    await Product.deleteOne({ _id: id });
    res.redirect('/');
  },

  find: async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('edit', { product });
  },
  
  edit: async (req, res) => {
    const { id } = req.params;
    await Product.updateOne( {_id: id}, req.body);
    res.redirect('/');
  },
}