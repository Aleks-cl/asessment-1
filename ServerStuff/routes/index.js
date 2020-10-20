let express = require('express');
let router = express.Router();
let indexControl = require('../controllers/index');


/* GET Home page. */
router.get('/', indexControl.displayHomePage);
/* GET Home page. */
router.get('/home',indexControl.displayHomePage);

/* GET About me page. */
router.get('/about', indexControl.displayAboutPage);

/* GET Products page. */
router.get('/products', indexControl.displayProductsPage);

/* GET Survices me page. */
router.get('/survices', indexControl.displaySurvicesPage);

/* GET Contact me page. */
router.get('/Contact',indexControl.displayContactMePage);

/* GET login page.  temp for this*/
router.get('/login', indexControl.displayLoginPage );
// post
router.post('/login', indexControl.ProssessLoginPage);
//logout
/* GET login page.  temp for this*/
router.get('/tempReg', indexControl.disPlaytempReg );
// post
router.post('/tempReg', indexControl.prossessReg);
//logout
router.get('/logout');


module.exports = router;
