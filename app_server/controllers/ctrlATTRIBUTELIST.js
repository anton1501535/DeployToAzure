const attributes = function (req, res) {
    res.render('features', {
        attrlist:
            [
                {page:'contact', feature:'Contact Page'}
            ]});
};
module.exports = {
    attributes
};