const router = require("express").Router();
const apiRoutes = require("./api");
// Import all of the API routes from /api/index.js (no need for index.js though since it's implied)
//const apiUsers = require("./api/userRoutes");
// const apiThoughts = require("./api/thoughtRoutes");

// add prefix of `/api` to all of the api routes imported from the `api` directory
//router.use("/api", apiUsers);
//router.use("/api", apiThoughts);
router.use('/api', apiRoutes)
router.use((req, res) => res.send("Incorrect route!"));

module.exports = router;
