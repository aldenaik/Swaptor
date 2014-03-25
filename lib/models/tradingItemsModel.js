'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Story Schema
 */
var tradingItemsSchema = new Schema({
    name: String,
    image: String,
    description: String,
    want: String,
    categories: String,
    email: String

});

mongoose.model('tradingItems', tradingItemsSchema);
//
//
//StorySchema = tradingItemsSchema
//Story =  tradingItems
//saveStory = savetradingItems
