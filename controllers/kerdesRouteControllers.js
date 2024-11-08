const Question = require('../models/Question');

exports.deleteKerdes = async (req, res) => {
    try {
        await Question.findByIdAndDelete({ _id: req.params.id });

        res.status(200).json({ msg: 'Sikeres törlés!' });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

exports.getKerdes = async (req, res) => {
    try {
        const { _id, targy, tipus, kerdes, valaszok, joValaszok, kep } =
            await Question.findById({ _id: req.params.id });

        let valaszokSor = '';

        for (let i = 0; i < valaszok.length; i++) {
            if (i < valaszok.length - 1) {
                valaszokSor += `${valaszok[i]}\n`;
            } else {
                valaszokSor += `${valaszok[i]}`;
            }
        }

        let joValaszokSor = '';

        for (let i = 0; i < joValaszok.length; i++) {
            if (i < joValaszok.length - 1) {
                joValaszokSor += `${joValaszok[i]}\n`;
            } else {
                joValaszokSor += `${joValaszok[i]}`;
            }
        }

        let modKerdes = {
            _id,
            targy,
            tipus,
            kerdes,
            valaszokSor,
            joValaszokSor,
            kep,
        };
        res.status(200).render('kerdesModosit.ejs', { modKerdes });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

exports.postKerdes = async (req, res) => {
    try {
        const { id, targy, tipus, kerdes, valaszok, joValaszok, kep } =
            req.body;

        const valaszokTomb = valaszok.split('\n');
        const joValaszokTomb = joValaszok.split('\n');
        await Question.findByIdAndUpdate(
            { _id: id },
            {
                targy,
                tipus,
                kerdes,
                valaszok: valaszokTomb,
                joValaszok: joValaszokTomb,
                kep,
            }
        );
        res.status(200).json({ msg: 'Sikeres módosítás!' });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
