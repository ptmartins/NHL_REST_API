const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  const logos = [
    { name: 'Anaheim Ducks', url: '/logos/anaheim_ducks.png' },
    { name: 'Boston Bruins', url: '/logos/boston_bruins.png' },
    { name: 'Buffalo Sabres', url: '/logos/buffal0_sabres.png' },
    { name: 'Calgary Flames', url: '/logos/calgary_flames.png' }
    // ...
  ];
  res.json(logos);
});

router.get('/:name', (req, res) => {
  const logoName = req.params.name.toLowerCase().split(' ').join('_');
  console.log('Logo Name: ' + logoName);
  const logoPath = path.join(__dirname, '../../client/public/logos', `${logoName}.png`);
  res.sendFile(logoPath);
});

module.exports = router;