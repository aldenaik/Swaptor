//var Object = require('../models/object.js');
//
//
//
////var listPosts = function(req, res) {
////    Post.find()
////        .sort('title')
////        .exec(function(err, posts) {
////            res.send(posts);
////        });
////};
//
////var getPost = function(req, res) {
////    var query = Post.findById(req.params.id);
////
////    query.exec(function(err, post){
////        if(err){
////            res.send(err);
////        }
////        res.send(post);
////    });
////};
//
//
//var saveStory = function(req, res) {
//    var newStory = req.body;
//
//
//    newStory.save(function(err) {
//        if(err){
//
//        } else {
//            //Push the new post to the user
//            $push: { Story: newStory.id }}, function (err, user) {
//                if(err) {
//                    return handleError(err);
//                } else{'nothing'
//                }
//            });
//            res.send({success:true});
//        }
//    });
//};
//
//
//
//
//
//
//
////var deletePost = function(req, res){
////    var query = Post.findById(req.params.id);
////
////    query.remove(function(err){
////        if(!err){
////            res.send({success:true});
////        }
////    });
////};
////
////var updatePost = function(req, res){
////    Post.findById(req.params.id, function(err, post){
////
////        post.title = req.body.title || post.title;
////        post.body = req.body.body || post.body;
////
////        post.save(function (err) {
////            if (err) return (err);
////            res.send(post);
////        });
////    });
////};
//
//module.exports = {
////    get: listPosts,
////    getOne: getPost,
//    Object: saveObject
////    remove: deletePost,
////    update: updatePost
//};