Template.registerHelper('dstache', function() {
  return '{{';
});

FView.ready(function() {
  FView.registerView('GridLayout', famous.views.GridLayout);
});
