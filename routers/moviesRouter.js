
const router = require("express").Router();

const moviesControllers = require("../controllers/moviesControllers");

//CRUD

router.get("/", async(req, res) => {
    try {
        res.json(await moviesControllers.findTopRated());
    } catch (err) {
        return res.status(500).json ({
            message: err.message
        });
    }
});

router.get("/:id", async(req, res) => {
    try {
        let id = req.params.id;
        res.json(await moviesControllers.searchById(id));
    } catch (err) {
        return res.status(500).json ({
            mensaje: err.message
        });
    }
});

router.get("/search/:query", async(req, res) => {
    try {
        let query = req.params.query;
        res.json(await moviesControllers.searchByTitle(query));
    } catch (err) {
        return res.status(500).json ({
            mensaje: err.message
        });
    }
});

router.get("/genre/:genre", async(req, res) => {
    try {
        let genre = req.params.genre;
        res.json(await moviesControllers.findToGenre(genre));
    } catch (err) {
        return res.status(500).json ({
            message: err.message
        });
    }
});




module.exports = router;