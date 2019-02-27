module.exports = function (app) {
    var beerController = require('../controllers/beerController.js');
    var userController = require('../controllers/userController.js');
    var authController = require('../controllers/authController.js');
    
    app.route('/api/beers')
        .get(authController.isAuthenticated, beerController.getBeers)
        .post(authController.isAuthenticated,beerController.postBeers);

    app.route('/api/beers/:beer_id')
        .get(authController.isAuthenticated,beerController.getbeer)
        .put(authController.isAuthenticated,beerController.putBeer)
        .delete(authController.isAuthenticated,beerController.deleteBeer);

    app.route('/api/users')
        .post(userController.postUser)
        .get(authController.isAuthenticated,userController.getUsers);
        
};

