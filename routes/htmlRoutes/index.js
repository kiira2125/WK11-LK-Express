const path = require('path');
const router = require('express').Router();

// get route for html page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../routes/apiRoutes/index.html'));
});
// get rout for notes html page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../routes/apiRoutes/notes.html'));
})

module.exports = router;