const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  const logos = [
    { name: 'Anaheim Ducks', url: '/logos/anaheim_ducks.png' },
    { name: 'Boston Bruins', url: '/logos/boston_bruins.png' },
    { name: 'Buffalo Sabres', url: '/logos/buffal0_sabres.png' },
    { name: 'Calgary Flames', url: '/logos/calgary_flames.png' },
    { name: 'Carolina Hurricanes', url: '/logos/carolina_hurricanes.png' },
    { name: 'Chicago Blackhawks', url: '/logos/chicago_blackhawks.png' },
    { name: 'Colorado Avalanche', url: '/logos/colorado_avalanche.png' },
    { name: 'Columbus Blue Jackets', url: '/logos/columbus_blue_jackets.png' },
    { name: 'Dallas Stars', url: '/logos/dallas_stars.png' },
    {name: 'Los Angeles Kings', url: '/logos/los_angeles_kings.png'},
    {name: 'Minnesota Wild', url: '/logos/minnesota_wild.png'},
    {name: 'Montreal Canadiens', url: '/logos/montreal_canadiens.png'},
    {name: 'Nashville Predators', url: '/logos/nashville_predators.png'},
    {name: 'New Jersey Devils', url: '/logos/new_jersey_devils.png'},
    {name: 'New York Islanders', url: '/logos/new_york_islanders.png'},
    {name: 'New York Rangers', url: '/logos/new_york_rangers.png'},
    {name: 'Ottawa Senators', url: '/logos/ottawa_senators.png'},
    {name: 'Philadelphia Flyers', url: '/logos/philadelphia_flyers.png'},
    {name: 'Pittsburgh Penguins', url: '/logos/pittsburgh_penguins.png'},
    {name: 'San Jose Sharks', url: '/logos/san_jose_sharks.png'},
    {name: 'St Louis Blues', url: '/logos/st_louis_blues.png'},
    {name: 'Tampa Bay Lightning', url: '/logos/tampa_bay_lightning.png'},
    {name: 'Toronto Maple Leafs', url: '/logos/toronto_maple_leafs.png'},
    {name: 'Utah Hockey Club', url: '/logos/utah_hockey_club.png'},
    {name: 'Vancouver Canucks', url: '/logos/vancouver_canucks.png'},
    {name: 'Vegas Golden Knights', url: '/logos/vegas_golden_knights.png'},
    {name: 'Washington Capitals', url: '/logos/washington_capitals.png'},
    {name: 'Winnipeg Jets', url: '/logos/winnipeg_jets.png'}
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