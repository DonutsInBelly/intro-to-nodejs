const express = require('express');

var app = express();

var quoteBank = [
  {
    'quote': 'We cannot change the cards we are dealt, just how we play the hand.',
    'author': 'Randy Pausch'
  },
  {
    'quote': 'Don\'t try to live up to others, but make your own adventure. Regret is only good for telling yourself what you will never do again. Once you know which things you will never do again, regret turns into wisdom, and wisdom builds character.',
    'author': 'Anonymous'
  },
  {
    'quote': 'The way you know when someone stops caring is when they stop criticizing you.',
    'author': 'Randy Pausch'
  },
  {
    'quote': 'Without music life would be a mistake.',
    'author': 'Friedrich Wilhelm Nietzsche'
  },
  {
    'quote': 'A day without laughter is a day wasted!',
    'author': 'Charlie Chaplin'
  },
  {
    'quote': 'I\'m a great believer in luck, and I find the harder I work the more I have of it',
    'author': 'Thomas Jefferson'
  }
];

app.get('/quote', (req, res)=>{
  var index = Math.floor(Math.random() * 6);
  res.send(quoteBank[index]);
});

app.listen(process.env.PORT || 8080);
