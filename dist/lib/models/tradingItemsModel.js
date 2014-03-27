'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Story Schema
 */
var tradingitemsSchema = new Schema({
    name: String,
    image: String,
    description: String,
    want: String,
    categories: Array,
    email: String

});

mongoose.model('tradingitems', tradingitemsSchema);
//
//
//StorySchema = tradingItemsSchema
//Story =  tradingItems
//saveStory = savetradingItems
