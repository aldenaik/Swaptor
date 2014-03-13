'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.images = function(req, res) {
    setTimeout(function() {  ////////////just to simulate lag time when the server is not on my computer-can erase this and line 36
    res.send({

        tradingItems: [
            {'name':'Ipad',
                'image':'https://s3-us-west-2.amazonaws.com/tradeitems/sample/ipad.jpg',
                'description':'This is an old ipad that is broken but I think that it is probably still worth at least 5 gold bars',
                'categories': ['all', 'electronics']
            },
            {'name':'bike',
                'image':'https://s3-us-west-2.amazonaws.com/tradeitems/sample/bike.jpg',
                'description':'This is an old ipad that is broken but I think that it is probably still worth at least 5 gold bars',
                'categories': ['all','bikes']
            },
            {'name':'backpack',
                'image':'https://s3-us-west-2.amazonaws.com/tradeitems/sample/backpack.jpg',
                'description':'This is an old ipad that is broken but I think that it is probably still worth at least 5 gold bars',
                'categories': ['all','accessories']
            },
            {'name':'bed',
                'image':'https://s3-us-west-2.amazonaws.com/tradeitems/sample/bed.jpg',
                'description':'This is an old ipad that is broken but I think that it is probably still worth at least 5 gold bars',
                'categories': ['all','furniture']
            },
            {'name':'Cafe Racer',
                'image':'https://s3-us-west-2.amazonaws.com/tradeitems/sample/caferacer.jpg',
                'description':'This is an old ipad that is broken but I think that it is probably still worth at least 5 gold bars',
                'categories': ['all','bikes']
            },
            {'name':'Mid Century Dresser',
                'image':'https://s3-us-west-2.amazonaws.com/tradeitems/sample/dresser.jpg',
                'description':'This is an old ipad that is broken but I think that it is probably still worth at least 5 gold bars',
                'categories': ['all','furniture']
            },
            {'name':'MacBook',
                'image':'https://s3-us-west-2.amazonaws.com/tradeitems/sample/laptop.jpg',
                'description':'This is an old ipad that is broken but I think that it is probably still worth at least 5 gold bars',
                'categories': ['all','electronics']
            },
         ]
    });
    }, 250);
};




//'name':'Ipad',
//    'image':'https://s3-us-west-2.amazonaws.com/tradeitems/sample/ipad.jpg',
//    'description':'This is an old ipad that is broken but I think that it is probably still worth at least 5 gold bars'