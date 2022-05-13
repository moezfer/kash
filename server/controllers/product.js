const Product=require('../models/product');

exports.postProduct = async (req, res) => {
    try {
      const product = await new Product({ ...req.body, postedBy: req.user._id }).save();
      // console.log("saved link => ", link);
      res.json(product);
    } catch (err) {
      console.log(err);
    }
  };
  
  exports.products = async (req, res) => {
    try {
      const all = await Product.find().sort({ createdAt: -1 }).limit(500);
      res.json(all);
    } catch (err) {
      console.log(err);
    }
  };