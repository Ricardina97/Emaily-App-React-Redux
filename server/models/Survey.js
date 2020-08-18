const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title: String,
    subject: String,
    body: String,
    // List of recipients that have a email and boolean
    // to verify that the user clicked the email
    // This is to avoid endless count
    recipients: [RecipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    // Reation to the user that created this survey (relationship field)
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema);
