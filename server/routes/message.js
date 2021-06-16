const express = require('express');
const router = express.Router();
const { mailjet } = require('../config/mail');
const { ClientError } = require('../errors');

router.post('/send', function(req, res, next) {
  const message = req.body;
  mailjet
    .post('send', { 'version': 'v3.1' })
    .request({
      'Messages': [
        {
          'From': {
            'Email': 'customer@devweb.club',
            // 'Name': 'New message from dubinin.club',
          },
          'To': [
            {
              'Email': 'incoming@devweb.club',
              'Name': message.name,
            },
          ],
          'Subject': 'New message from devweb.club',
          'TextPart': `New message was sent from devweb.club by ${message.name}, ${message.email} :
          ${message.text}`,
          'HTMLPart': `<h3>New message was sent from devweb.club by <strong>${message.name}, ${message.email}</strong> :</h3></br>
          <p>${message.text}</p>`,
          'CustomID': 'null',
        },
      ],
    })
    .then((result) => {
      return mailjet
        .post('send', { 'version': 'v3.1' })
        .request({
          'Messages': [
            {
              'From': {
                'Email': 'noreply@devweb.club',
                'Name': 'Noreply',
              },
              'To': [
                {
                  'Email': message.email,
                  'Name': message.name,
                },
              ],
              'Subject': 'Noreply. Message to https://devweb.club has been delivered',
              'TextPart': `Hello ${message.name}. Your message successfully delivered to https://devweb.club`,
              'HTMLPart': `<h3>Hello ${message.name}</h3></br>
                          <p>Your message successfully delivered to https://devweb.club</p>`,
              'CustomID': 'null',
            },
          ],
        });
    })
    .then((result) => {
      res.status(200).json();
    })
    .catch((err) => {
      return next(new ClientError('Message not delivered'));
    });
});

module.exports = router;
