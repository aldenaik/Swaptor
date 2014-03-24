'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Story Schema
 */
var StorySchema = new Schema({
    title: String,
    body: String
});

mongoose.model('Story', StorySchema);
