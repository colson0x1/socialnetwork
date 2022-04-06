const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("yo its user routes");
});

module.exports = router;
