const { Router } = require("express");
const router = Router();


router.get('/', (req, res) => {
    const context = {};
    res.send("Hello World");
});


module.exports = router;