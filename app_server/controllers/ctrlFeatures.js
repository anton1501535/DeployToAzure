const attributes = function (req, res) {
    res.render('ominaisuudet', {
        attrlist:
            [
                {page:'contact', feature:'Contact Page'},
            ]});
};
module.exports = {
    attributes
};