AccountsExtra.init({
  saveCreatedAt: true,
  saveProfilePic: true,
  saveServiceUsername: true,
  setAccountUsername: true
});

Meteor.publish('users', function() {
  return Meteor.users.find({}, { fields: { createdAt: 1, profile: 1 } });
});
