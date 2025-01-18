const express = require('express');
const cors = require('cors'); 
const path = require('path');
const logoRouter = require('./api/logos');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json()); 
app.use('/api/logos', logoRouter); 
app.use(express.static(path.join(__dirname, '../client/public'))); 

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;