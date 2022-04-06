const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("yo its auth routes");
});

module.exports = router;
