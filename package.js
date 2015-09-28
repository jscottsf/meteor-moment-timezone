Package.describe({
  name: 'moment-timezone',
  summary: 'Moment-timezone (unofficial): parse and display dates in any timezone',
  version: '0.3.0',
});

Package.onUse(function (api) {

  api.versionsFrom('METEOR@1.0');

  api.use('momentjs:moment', 'client');

  api.addFiles(
    ['moment-timezone-meteor.js'],
    'client');
});
