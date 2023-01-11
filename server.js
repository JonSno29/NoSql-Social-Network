const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'))

 //mongoose.connect(
  // process.env.MONGODB_URI ||
    // "mongodb://localhost:27017/NOSQL-SOCIAL-NETWORK",
   //{
    // useNewUrlParser: true,
    // useUnifiedTopology: true
  // }
// );

 //mongoose.set('debug', true)
db.once('open', () => {
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
  });

