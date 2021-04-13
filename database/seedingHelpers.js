const faker = require('faker');

/*
let hostSchema = mongoose.Schema({
  listingID: Number,
  hostName: String,         word bank
  joinDate: String,         faker month + faker year
  hostReviewCount: Number,  faker number
  superhostFlag: Boolean,   random ceiling from 0 to 1
  hostDescription: String,  faker text
  stayDescription: String,  faker text
  responseRate: String,     faker percentage
  responseTime: String      "within a(n) " + faker unit of time (hour, day, week, month)
});
*/

let seeder = {};

// WORD BANKS
// Astronaut names
seeder.hostNames = [
  'Buzz Aldrin',
  'William A. Anders',
  'Michael P. Anderson',
  'Neil Armstrong',
  'Alan Bean',
  'Guion S. Bluford, Jr.',
  'Charles Bolden',
  'Frank Borman',
  'Vance Brand',
  'David M. Brown',
  'Scott Carpenter',
  'Gerald Carr',
  'Eugene Andrew Cernan',
  'Roger B. Chaffee',
  'Franklin Chang-Díaz',
  'Kalpana Chawla',
  'Laurel Blair Salton Clark',
  'Eileen Collins',
  'Michael Collins',
  'Charles Conrad, Jr.',
  'L. Gordon Cooper, Jr.',
  'Robert Laurel Crippen',
  'R. Walter Cunningham',
  'Donn Eisele',
  'Owen K. Garriott',
  'Edward Gibson',
  'John H. Glenn, Jr.',
  'Richard F. Gordon, Jr.',
  'Virgil I. Grissom',
  'Fred W. Haise, Jr.',
  'Susan Helms',
  'Rick D. Husband',
  'James B. Irwin',
  'Mae Jemison',
  'Mark Kelly',
  'Scott Kelly',
  'Joseph Kerwin',
  'James A. Lovell, Jr.',
  'Shannon Wells Lucid',
  'Christa Corrigan McAuliffe',
  'Bruce McCandless',
  'William C. McCool',
  'James A. McDivitt',
  'Ronald McNair',
  'Michael Melvill',
  'Edgar D. Mitchell',
  'Barbara Morgan',
  'Story Musgrave',
  'Bill Nelson',
  'Ellen Ochoa',
  'Sally Ride',
  'Stuart A. Roosa',
  'Jerry Ross',
  'Walter M. Schirra, Jr.',
  'Harrison Schmitt',
  'David Scott',
  'Alan B. Shepard, Jr.',
  'Donald Kent Slayton',
  'Thomas P. Stafford',
  'Kathryn Sullivan',
  'John L. Swigert, Jr.',
  'David Mathieson Walker',
  'Edward H. White, II',
  'Peggy Whitson',
  'Sunita Williams',
  'Alfred Worden',
  'John W. Young'
];


// FUNCTIONS
seeder.generateHostName = (randomNumber) => {
  const hostNameIndex = Math.floor(randomNumber * seeder.hostNames.length);

  return seeder.hostNames[hostNameIndex];
};

seeder.generateJoinDate = (randomNumber) => {
  // Random year between 2000 and 2021
  const joinYear = Math.floor(randomNumber * 21) + 2000;
  const joinMonth = faker.date.month();

  return `${joinMonth} ${joinYear}`;
};

seeder.generateHostReviewCount = () => {
  return faker.random.number();
};

seeder.generateSuperhostFlag = () => {
  return faker.random.boolean();
};

// Generate fake host desc

// Generate fake stay desc

// Generate fake response rate

// Generate fake response time

// Insert into MongoDB
seeder.seedDB = () => {
  const maxRecords = 100;

  // Loop 100 times
    // For each loop, generate a random number to pass into the helper functions using Math.random()
};