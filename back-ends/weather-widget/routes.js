const router = require('Express').Router();

router.use("/location", require("./routes/location"));
router.use("/weather", require("./routes/weather"));

module.exports = router;