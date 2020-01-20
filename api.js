
require('dotenv').load();
const cron = require('node-cron');
const express = require('express');
const TwitterHeadlines = require('twitter-headlines');

const news = new TwitterHeadlines({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  headlines_file: './continuosly_mac.headlines.json',
});

const app = express();
news.get();

app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.send(news.headlines);
});

app.get('/categories', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.send(news.categories);
});


cron.schedule('0,15,30,45 * * * *', () => {
  news.get();
});

const PORT = process.env.PORT || 3000;

console.log('API running on Port ', PORT);
app.listen(PORT);
