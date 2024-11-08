const Question = require('../models/Question');

exports.getUjKerdes = async (req, res) => {
    try {
        res.status(200).render('ujKerdes.ejs');
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

exports.postUjKerdes = async (req, res) => {
    try {
        const { targy, tipus, kerdes, valaszok, joValaszok, kep } = req.body;
        const valaszokTomb = valaszok.split('\n');
        const joValaszokTomb = joValaszok.split('\n');
        const newQuestion = new Question({
            targy,
            tipus,
            kerdes,
            valaszok: valaszokTomb,
            joValaszok: joValaszokTomb,
            kep,
        });
        await newQuestion.save();
        res.status(201).json({ msg: 'Sikeres feltöltés!' });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
