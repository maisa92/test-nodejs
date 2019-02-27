var Beer = require('../models/beer.js');


exports.postBeers = function (req, res) {
    var beer = new Beer();

    beer.name = req.body.name;
    beer.type = req.body.type;
    beer.quantity = req.body.quantity;
    beer.userId = req.user._id;


    beer.save(function (err) {
        if (err)
            res.send(err);

        res.json({ message: 'Beer added to the locker', data: beer });
    });
};

exports.getBeers = function (req, res) {
    Beer.find({ userId: req.user._id }, function (err, beers) {
        if (err)
            res.send(err);

        res.json(beers);
    });
};

exports.getbeer = function (req, res) {
    Beer.findById({ userId: req.user._id, _id: req.params.beer_id }, function (err, beer) {
        if (err)
            res.send(err);

        res.json(beer);
    });
};


exports.putBeer = function (req, res) {
    Beer.findById({ userId: req.user._id, _id: req.params.beer_id }, function (err, beer) {
        if (err)
            res.send(err);

        beer.name = req.body.name;
        beer.type = req.body.type;
        beer.quantity = req.body.quantity;

        beer.save(function (err) {
            if (err)
                res.send(err);

            res.json(beer);
        });
    });
};

exports.deleteBeer = function (req, res) {
    Beer.findByIdAndRemove({ userId: req.user._id, _id: req.params.beer_id }, function (err) {
        if (err)
            res.send(err);

        res.json({ message: 'Beer removed' });
    });
};
