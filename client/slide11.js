// Publish and AccountsExtra setup in server/accounts.js
Meteor.subscribe('users');

Template.slide11.helpers({
  users: function() {
    var sortBy = Session.get('sortBy');
    var options = { sort: {} };
    if (sortBy === 'name')
      options.sort['profile.name'] = 1;
    else
      options.sort.createdAt = 1;

    return Meteor.users.find({}, options);
  }
});

Session.setDefault('sortBy', 'name');

Template.slide11_options.events({
  'click input': function(event, tpl) {
    Session.set('sortBy', this.valueOf());
  }
});

Template.slide11_options.helpers({
  sortByOptions: [ 'name', 'date' ],
  checked: function() {
    return Session.equals('sortBy', this.valueOf());
  }
});
