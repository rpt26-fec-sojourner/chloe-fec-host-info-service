const faker = require('faker');
const mongoose = require('mongoose');
const dbHelper = require('./hostModel.js');

let seeder = {};

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

seeder.responseTimes = [
  'an hour',
  'a day',
  'a month'
];

seeder.generateHostPic = (id) => {
  return `https://airbnbhostpictures.s3.amazonaws.com/pic-${id}.jpg`;
};

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

seeder.generateHostReviewCount = (randomNumber) => {
  // Random number of reviews between 1 and 1000;
  const numberOfReviews = Math.ceil(randomNumber * 1000);
  return numberOfReviews.toString();
};

seeder.generateSuperhostFlag = () => {
  return faker.datatype.boolean();
};

seeder.generateHostDesc = () => {
  return faker.lorem.paragraph();
};

seeder.generateStayDesc = () => {
  return faker.lorem.sentence();
};

seeder.generateResponseRate = (randomNumber) => {
  const responseRate = Math.ceil(randomNumber * 100);

  return responseRate.toString();
};

seeder.generateResponseTime = (randomNumber) => {
  const responseTimeIndex = Math.floor(randomNumber * seeder.responseTimes.length);

  return seeder.responseTimes[responseTimeIndex];
};

seeder.seedDB = () => {
  mongoose.connect('mongodb://localhost:27017/airbnb_host', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
      return dbHelper.deleteAllHosts();
    })
    .then(() => {
      let listingID = 1;
      let randomNumber;
      let hostPicture;
      let hostName;
      let joinDate;
      let hostReviewCount;
      let superhostFlag;
      let hostDescription;
      let stayDescription;
      let responseRate;
      let responseTime;

      let hostInfo = {};

      while (listingID <= 100) {
        randomNumber = Math.random();
        hostPicture = seeder.generateHostPic(listingID);
        hostName = seeder.generateHostName(randomNumber);
        joinDate = seeder.generateJoinDate(randomNumber);
        hostReviewCount = seeder.generateHostReviewCount(randomNumber);
        superhostFlag = seeder.generateSuperhostFlag();
        hostDescription = seeder.generateHostDesc();
        stayDescription = seeder.generateStayDesc();
        responseRate = seeder.generateResponseRate(randomNumber);
        responseTime = seeder.generateResponseTime(randomNumber);
        hostInfo = {
          listingID: listingID,
          hostPicture: hostPicture,
          hostName: hostName,
          joinDate: joinDate,
          hostReviewCount: hostReviewCount,
          superhostFlag: superhostFlag,
          hostDescription: hostDescription,
          stayDescription: stayDescription,
          responseRate: responseRate,
          responseTime: responseTime
        };

        dbHelper.createHost(hostInfo);
        listingID++;
      }
    })
    .then(() => {
      console.log('Successfully created 100 Host documents');
    })
    .catch((err) => {
      console.log('Error connecting to database: ', err);
    });
};

seeder.seedDB();

module.exports.seeder = seeder;