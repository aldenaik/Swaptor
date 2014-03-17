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

exports.items = function(req, res) {
    setTimeout(function() {  ////////////just to simulate lag time when the server is not on my computer-can erase this and line 36
    res.send({

        tradingItems: [
            {'name':'Ipad',
                'image':'https://s3-us-west-2.amazonaws.com/tradeitems/sample/ipad.jpg',
                'description':'This is an old ipad that is broken but I think that it is probably still worth at least 5 gold bars',
                'want':'Any Electronics',
                'categories': ['all', 'electronics'],
                'email': 'thisistight@gmail.com'

            },
            {'name':'bike',
                'image':'https://s3-us-west-2.amazonaws.com/tradeitems/sample/bike.jpg',
                'description':'Sweet vintage road cruiser, look at those sweet white handlebars, how I keep those clean? nobody knows.',
                'want':'bicycle gear',
                'categories': ['all','bikes'],
                'email': 'thisistight@gmail.com'

            },
            {'name':'backpack',
                'image':'https://s3-us-west-2.amazonaws.com/tradeitems/sample/backpack.jpg',
                'description':'Check out this hipster backpack... it looks like a slyed the cow myself that madet his beautiful leather... but I am way to hipster to ill innocent cows.',
                'want':'Clothing',
                'categories': ['all','clothing'],
                'email': 'thisistight@gmail.com'

            },
            {'name':'bed',
                'image':'https://s3-us-west-2.amazonaws.com/tradeitems/sample/bed.jpg',
                'description':'This brass bed has been in my family for literally centuries... ok truthfully I bought it on craigslist last week.',
                'want':'New shoes, a watch',
                'categories': ['all','furniture'],
                'email': 'thisistight@gmail.com'

            },
            {'name':'Cafe Racer',
                'image':'https://s3-us-west-2.amazonaws.com/tradeitems/sample/caferacer.jpg',
                'description':'Give me you left kidney and you may have the most awesome bike in the entire universe.',
                'want':'A Harley',
                'categories': ['all','bikes'],
                'email': 'thisistight@gmail.com'

            },
            {'name':'Mid Century Dresser',
                'image':'https://s3-us-west-2.amazonaws.com/tradeitems/sample/dresser.jpg',
                'description':'Where else are you going to keep your clothes... on the floor? You arent in college anymore.',
                'want':'New television. 60" or bigger',
                'categories': ['all','furniture'],
                'email': 'thisistight@gmail.com'

            },
            {'name':'MacBook Pro',
                'image':'https://s3-us-west-2.amazonaws.com/tradeitems/sample/laptop.jpg',
                'description':'Its a computer',
                'want':'A boondoggle key chain',
                'categories': ['all','electronics'],
                'email': 'thisistight@gmail.com'

            },
            {'name':'GoPro',
                'image':'https://s3-us-west-2.amazonaws.com/tradeitems/profileObjects/gopro.jpeg',
                'description':'Record all sick stunts and ish you do... and if you dont do anything that cool, just think of all the cool things you will do when you have this camera',
                'want':'Any Electronics',
                'categories': ['all', 'electronics'],
                'email': 'aldenaikele@gmail.com'

            },
            {'name':'RVCA hat',
                'image':'https://s3-us-west-2.amazonaws.com/tradeitems/profileObjects/hat.jpeg',
                'description':'Think of all the money you will save in haircuts if you can just hide your knappy hair under this cap',
                'want':'maybe some old shoes?',
                'categories': ['all','clothing'],
                'email': 'aldenaikele@gmail.com'

            },
            {'name':'Harley Davidson Iron 883',
                'image':'https://s3-us-west-2.amazonaws.com/tradeitems/profileObjects/motorcycle.jpeg',
                'description':'Must sell, I didnt have any leather to wear with this hog',
                'want':'A sweet Cafe Racer',
                'categories': ['all','bikes'],
                'email': 'aldenaikele@gmail.com'

            },
            {'name':'Mountain Bike',
                'image':'https://s3-us-west-2.amazonaws.com/tradeitems/profileObjects/mountain+bike.jpeg',
                'description':'Do you bikes on the side of a mountain? this is the bike for you!',
                'want':'A road bike (I live in the city not the mountains)',
                'categories': ['all','bikes'],
                'email': 'aldenaikele@gmail.com'

            },
            {'name':'Table Saw',
                'image':'https://s3-us-west-2.amazonaws.com/tradeitems/profileObjects/saw.jpeg',
                'description':'Cut some wood!',
                'want':'Some wood to cut',
                'categories': ['all','electronics'],
                'email': 'aldenaikele@gmail.com'

            },
            {'name':'Watch',
                'image':'https://s3-us-west-2.amazonaws.com/tradeitems/profileObjects/watch.jpeg',
                'description':'Your arm will look good.',
                'want':'An old Xbox',
                'categories': ['all','clothing'],
                'email': 'aldenaikele@gmail.com'

            },
        ]
    });
    }, 250);
};

exports.userOneItems = function(req, res) {
    setTimeout(function() {  ////////////just to simulate lag time when the server is not on my computer-can erase this and line 36
        res.send({

            onesitems: [
                {'name':'GoPro',
                    'image':'https://s3.amazonaws.com/swapter1/gopro.jpeg',
                    'description':'Record all sick stunts and ish you do... and if you dont do anything that cool, just think of all the cool things you will do when you have this camera',
                    'want':'Any Electronics',
                    'categories': ['all', 'electronics'],
                    'email': 'aldenaikele@gmail.com'
                },
                {'name':'RVCA hat',
                    'image':'https://s3.amazonaws.com/swapter1/hat.jpeg',
                    'description':'Think of all the money you will save in haircuts if you can just hide your knappy hair under this cap',
                    'want':'maybe some old shoes?',
                    'categories': ['all','clothing'],
                    'email': 'aldenaikele@gmail.com'

                },
                {'name':'Harley Davidson Iron 883',
                    'image':'https://s3.amazonaws.com/swapter1/motorcycle.jpeg',
                    'description':'Must sell, I didnt have any leather to wear with this hog',
                    'want':'A sweet Cafe Racer',
                    'categories': ['all','bikes'],
                    'email': 'aldenaikele@gmail.com'

                },
                {'name':'Mountain Bike',
                    'image':'https://s3.amazonaws.com/swapter1/mountain+bike.jpeg',
                    'description':'Do you bikes on the side of a mountain? this is the bike for you!',
                    'want':'A road bike (I live in the city not the mountains)',
                    'categories': ['all','bikes'],
                    'email': 'aldenaikele@gmail.com'

                },
                {'name':'Table Saw',
                    'image':'https://s3.amazonaws.com/swapter1/saw.jpeg',
                    'description':'Cut some wood!',
                    'want':'Some wood to cut',
                    'categories': ['all','electronics'],
                    'email': 'aldenaikele@gmail.com'

                },
                {'name':'Watch',
                    'image':'https://s3.amazonaws.com/swapter1/watch.jpeg',
                    'description':'Your arm will look good.',
                    'want':'An old Xbox',
                    'categories': ['all','clothing'],
                    'email': 'aldenaikele@gmail.com'

                },
                {'name':'Picture of Alden',
                    'image':'https://s3.amazonaws.com/swapter1/142.jpg',
                    'description':'He looks good.',
                    'want':'Nothing',
                    'categories': ['all','furniture'],
                    'email': 'aldenaikele@gmail.com'

                },
            ]
        });
    }, 250);
};
var AWS = require('aws-sdk'),
    fs = require('fs');

// For dev purposes only
AWS.config.update({ accessKeyId: 'AKIAJXEUWULMFXG57REQ', secretAccessKey: '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' });
exports.pictures = function(req, res) {
console.log(req.files);
    fs.readFile(req.files.displayImage.path, function (err, data) {
        if (err) { throw err; }

        var base64data = new Buffer(data, 'binary');

        var s3 = new AWS.S3();
        s3.client.putObject({
            Bucket: 'swapter1',
            Key: req.files.displayImage.originalFilename,
            Body: base64data,

        }, function(err, data){
            console.log(err);
            console.log(data);
        })


    });
}




