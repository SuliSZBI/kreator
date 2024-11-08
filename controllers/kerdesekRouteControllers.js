const Question = require('../models/Question');

exports.getKerdesek = async (req, res) => {
    try {
        const kerdesek = await Question.find({});

        res.status(200).render('kerdesek.ejs', { kerdesek });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

exports.getSzuroKerdesek = async (req, res) => {
    try {
        const kerdesek = await Question.find({ targy: req.params.tipus });

        res.status(200).render('kerdesek.ejs', { kerdesek });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
