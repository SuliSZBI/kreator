exports.getMain = (req, res) => {
    try {
        res.status(200).render('index.ejs');
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
