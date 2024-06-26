const ProductCard = require('../Model/ProductCardModel')

const postProductDetails = async (req, res) => {
    const { Arrival,Image,Tag,Productname,ProductInfo,MaximumRP,Sellingprice } = req.body;
    try {
        const newproductdata = new ProductCard({  Arrival,Image,Tag,Productname,ProductInfo,MaximumRP,Sellingprice });
        await newproductdata.save();
        res.status(201).json(newproductdata);
    } catch (err) {
        res.status(500).send(err);
    }
};



const getProductDetails = async (req, res) => {
    try {
        const productdetails = await ProductCard.find();
        res.json(productdetails);
    } catch (err) {
        res.status(500).send(err);
    }
};


const updateproductdetails = (req, res) => {
    ProductCard.findByIdAndUpdate(req.params.id, req.body)
      .then(Productcard => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  };


module.exports = {postProductDetails, getProductDetails,updateproductdetails}