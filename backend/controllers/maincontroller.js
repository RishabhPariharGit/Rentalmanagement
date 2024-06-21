const UserModel = require('../Model/User');
const Bannerimage = require('../Model/Bannerimage')
const PlansMonthly = require('../Model/Plans')
const AboutUs = require('../Model/Aboutus')

const getBannerImgae = async (req, res) => {
    try {
        const images = await Bannerimage.find();
        res.json(images);
    } catch (err) {
        res.status(500).send(err);
    }
};


const postBannerImage = async (req, res) => {
    const { url } = req.body;
    try {
        const newImage = new Bannerimage({ url });
        await newImage.save();
        res.status(201).json(newImage);
    } catch (err) {
        res.status(500).send(err);
    }
};


const getPlansData = async (req, res) => {
    try {
        const plans = await PlansMonthly.find();
        res.json(plans);
    } catch (err) {
        res.status(500).send(err);
    }
};


const postPlansData = async (req, res) => {
    const { OfferDetails } = req.body;
    try {
        const newplans = new PlansMonthly({ OfferDetails });
        await newplans.save();
        res.status(201).json(newplans);
    } catch (err) {
        res.status(500).send(err);
    }
};


const postAboutusData = async (req, res) => {
    const { imgurl,headtext,bodytext } = req.body;
    try {
        const newAboutus = new AboutUs({ imgurl,headtext,bodytext });
        await newAboutus.save();
        res.status(201).json(newAboutus);
    } catch (err) {
        res.status(500).send(err);
    }
};


const getAboutusData = async (req, res) => {
    try {
        const aboutuscompdata = await AboutUs.find();
        res.json(aboutuscompdata);
    } catch (err) {
        res.status(500).send(err);
    }
};




module.exports = {getBannerImgae, postBannerImage, getPlansData, postPlansData, postAboutusData, getAboutusData}