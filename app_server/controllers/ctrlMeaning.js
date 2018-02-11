const purpose = function (req, res){
    res.render ('sitepurpose', {
        purposelist:
        [
            {why:'To make the page useful', who:'for people who want to share their photography'}
        ]
    });
};
module.exports = {
    purpose
}
