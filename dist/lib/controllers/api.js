'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Story = mongoose.model('Story'),
    Tradingitems = mongoose.model('tradingitems');
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


exports.saveStory = function(req, res) {
    var newStory = new Story({
      title: req.body.title,
      body: req.body.body
    });
    newStory.save(function(err) {
        if(err){
            console.log(err);
        }
        res.send({success: true});
    });
};


//exports.items = function(req, res) {
//    res.send({
//
//        tradingItems: [
//            {"name":"Ipad",
//                "image":"https://s3-us-west-2.amazonaws.com/tradeitems/sample/ipad.jpg",
//                "description":"This is an old ipad that is broken but I think that it is probably still worth at least 5 gold bars",
//                "want":"Any Electronics",
//                "categories": ["all", "electronics"],
//                "email": "thisistight@gmail.com"
//
//            },
//            {"name":"bike",
//                "image":"https://s3-us-west-2.amazonaws.com/tradeitems/sample/bike.jpg",
//                "description":"Sweet vintage road cruiser, look at those sweet white handlebars, how I keep those clean? nobody knows.",
//                "want":"bicycle gear",
//                "categories": ["all", "bikes"],
//                "email": "thisistight@gmail.com"
//
//            },
//            {"name":"backpack",
//                "image":"https://s3-us-west-2.amazonaws.com/tradeitems/sample/backpack.jpg",
//                "description":"Check out this hipster backpack... it looks like a slayed the cow myself that made this beautiful leather... but I am way to hipster to kill innocent cows.",
//                "want":"Clothing",
//                "categories": ["all", "clothing"],
//                "email": "thisistight@gmail.com"
//
//            },
//            {"name":"bed",
//                "image":"https://s3-us-west-2.amazonaws.com/tradeitems/sample/bed.jpg",
//                "description":"This brass bed has been in my family for literally centuries... ok truthfully I bought it on craigslist last week.",
//                "want":"New shoes, a watch",
//                "categories": ["all", "furniture"],
//                "email": "thisistight@gmail.com"
//
//            },
//            {"name":"Cafe Racer",
//                "image":"https://s3-us-west-2.amazonaws.com/tradeitems/sample/caferacer.jpg",
//                "description":"Give me you left kidney and you may have the most awesome bike in the entire universe.",
//                "want":"A Harley",
//                "categories": ["all", "bikes"],
//                "email": "thisistight@gmail.com"
//
//            },
//            {"name":"Mid Century Dresser",
//                "image":"https://s3-us-west-2.amazonaws.com/tradeitems/sample/dresser.jpg",
//                "description":"Where else are you going to keep your clothes... on the floor? You arent in college anymore.",
//                "want":"New television. 60 inches or bigger",
//                "categories": ["all", "furniture"],
//                "email": "thisistight@gmail.com"
//
//            },
//            {"name":"MacBook Pro",
//                "image":"https://s3-us-west-2.amazonaws.com/tradeitems/sample/laptop.jpg",
//                "description":"Its a computer",
//                "want":"A boondoggle key chain",
//                "categories": ["all", "electronics"],
//                "email": "thisistight@gmail.com"
//
//            },
//            {"name":"GoPro",
//                "image":"https://s3-us-west-2.amazonaws.com/tradeitems/profileObjects/gopro.jpeg",
//                "description":"Record all sick stunts and ish you do... and if you dont do anything that cool, just think of all the cool things you will do when you have this camera",
//                "want":"Any Electronics",
//                "categories": ["all", "electronics"],
//                "email": "thisistight@gmail.com"
//
//            },
//            {"name":"RVCA hat",
//                "image":"https://s3-us-west-2.amazonaws.com/tradeitems/profileObjects/hat.jpeg",
//                "description":"Think of all the money you will save in haircuts if you can just hide your knappy hair under this cap",
//                "want":"maybe some old shoes?",
//                "categories": ["all", "clothing"],
//                "email": "thisistight@gmail.com"
//
//            },
//            {"name":"Harley Davidson Iron 883",
//                "image":"https://s3-us-west-2.amazonaws.com/tradeitems/profileObjects/motorcycle.jpeg",
//                "description":"Must sell, I didnt have any leather to wear with this hog",
//                "want":"A sweet Cafe Racer",
//                "categories": ["all", "bikes"],
//                "email": "thisistight@gmail.com"
//
//            },
//            {"name":"Mountain Bike",
//                "image":"https://s3-us-west-2.amazonaws.com/tradeitems/profileObjects/mountain+bike.jpeg",
//                "description":"Do you bikes on the side of a mountain? this is the bike for you!",
//                "want":"A road bike (I live in the city not the mountains)",
//                "categories": ["all", "bikes"],
//                "email": "thisistight@gmail.com"
//
//            },
//            {"name":"Table Saw",
//                "image":"https://s3-us-west-2.amazonaws.com/tradeitems/profileObjects/saw.jpeg",
//                "description":"Cut some wood!",
//                "want":"Some wood to cut",
//                "categories": ["all", "electronics"],
//                "email": "thisistight@gmail.com"
//
//            },
//            {"name":"Watch",
//                "image":"https://s3-us-west-2.amazonaws.com/tradeitems/profileObjects/watch.jpeg",
//                "description":"Your arm will look good.",
//                "want":"An old Xbox",
//                "categories": ["all", "clothing"],
//                "email": "thisistight@gmail.com"
//
//            }
//        ]
//    });
//};

exports.userOneItems = function(req, res) {
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
                {'name':'Picture of Alden',
                    'image':'https://s3.amazonaws.com/swapter1/38(web).jpg',
                    'description':'He looks good.',
                    'want':'Nothing',
                    'categories': ['all','furniture'],
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

            ]
        });
};

//to upload pictures to amazon s3

var AWS = require('aws-sdk'),
    fs = require('fs');

AWS.config.update({ accessKeyId: 'AKIAJXEUWULMFXG57REQ', secretAccessKey: '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' });
exports.savetradingitems = function(req, res) {
console.log(req.user); ///where image is kept

    fs.readFile(req.files.displayImage.path, function (err, data) {
        if (err) { throw err; }

        var base64data = new Buffer(data, 'binary');



// Create a bucket and put image in it. I had to use the name because amazon doesnt accept email address...
        var s3 = new AWS.S3();
        s3.client.createBucket({Bucket: req.user.id}, function() {
            var data = {
                Bucket: req.user.id,
                Key: req.files.displayImage.originalFilename,
                Body: base64data,
                ACL: "public-read",
                ContentType:".jpeg"
            };
            s3.client.putObject(data, function(err, data) {
                if (err) {
                    console.log("Error uploading data: ", err);
                } else {
                    console.log("Successfully uploaded data to myBucket/myKey");
                }
            });
        });


//        res.redirect('/profile');         // shut down the connection pool, no more messages
     });

            var newtradingitems = new Tradingitems({
                name: req.body.name,
                image: "https://s3.amazonaws.com/"+req.user.id+"/"+ req.files.displayImage.originalFilename,
                description: req.body.description,
                want: req.body.want,
           categories: ['all', req.body.categories],
                email: req.user.email
            });

    console.log("created categories:", newtradingitems.categories);

//    categories: ['all', req.body.categories],

//            console.log(req.user); ///where image is kept
        //    console.log(req); ///where image is kept

        //    console.log(newtradingitems);

            newtradingitems.save(function(err) {
                if(err){
                    console.log(err);
                }
                res.redirect('/profile');         // shut down the connection pool, no more messages
            });

        };



exports.showtradingitems = function(req, res) {
    return Tradingitems.find(function (err, Tradingitems) {
        if (!err) {
            return res.json(Tradingitems);
        } else {
            return res.send(err);
        }
    });
};




////to email
var nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "swaptorservice@gmail.com",
        pass: "swaptortrade"
    }
});

exports.email = function (req, res) {
    console.log(req.body);
    var mailOptions = {
        to: req.body.email, // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.message, // plaintext body
        attachments: [
            { filePath:req.body.image
            },
            { filePath:req.body.hostImage
            }
]
    };
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }
        smtpTransport.close();
        res.redirect('/browse');         // shut down the connection pool, no more messages
    });
//        res.render("partials/browse", { success: "building web app" });
};







//
//
//
//// setup e-mail data with unicode symbols
//var mailOptions = {
//    to: "aldenaikele@gmail.com", // list of receivers
//    subject: "dresser ✔", // Subject line
//    html: "<b>Hey Swapper i want to trade for your Ipad... I have attached a picture of my things you can email me @ thisistight@gmail.com  if you are interested</b><img src='https://s3-us-west-2.amazonaws.com/tradeitems/sample/dresser.jpg' />" // html body
//
//};
//
//// send mail with defined transport object
//
//smtpTransport.sendMail(mailOptions, function(error, response){
//    if(error){
//        console.log(error);
//    }else{
//        console.log("Message sent: " + response.message);
//    }
//
//    // if you don't want to use this transport object anymore, uncomment following line
//    //smtpTransport.close(); // shut down the connection pool, no more messages
//});