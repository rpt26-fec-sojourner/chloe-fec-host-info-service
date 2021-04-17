const mongoose = require('mongoose');

let hostSchema = mongoose.Schema({
  listingID: Number,
  hostPicture: String,
  hostName: String,
  joinDate: String,
  hostReviewCount: String,
  superhostFlag: Boolean,
  hostDescription: String,
  stayDescription: String,
  responseRate: String,
  responseTime: String
});

let Host = mongoose.model('Host', hostSchema);

Host.deleteAllHosts = () => {
  Host.deleteMany({}, (err) => {
    if (err) {
      console.log('Error deleting Host documents: ', err);
    }
  });
};

Host.createHost = (newHost) => {
  let newHostSchemaInstance = new Host(
    {
      listingID: newHost.listingID,
      hostPicture: newHost.hostPicture,
      hostName: newHost.hostName,
      joinDate: newHost.joinDate,
      hostReviewCount: newHost.hostReviewCount,
      superhostFlag: newHost.superhostFlag,
      hostDescription: newHost.hostDescription,
      stayDescription: newHost.stayDescription,
      responseRate: newHost.responseRate,
      responseTime: newHost.responseTime
    }
  );

  return newHostSchemaInstance.save()
    .catch((err) => {
      console.log('Error creating host: ', err);
    });
};

Host.findHostInfo = (id) => {
  return Host.findOne({listingID: id}, (err, host) => {
    return host || {};
  })
    .catch((err) => {
      console.log('Host.findOne error: ', err);
    });
};

module.exports = Host;