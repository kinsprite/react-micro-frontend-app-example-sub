/* eslint-disable */
"use strict";

(function(callback) {
  var apps = [
    {
      id: 'app-example-sub',
      dependencies: ['echart', 'app1'], // NOT implement yet
      entries: [
        // REMOVE the current app's entries in development
        // '/rmf-app-example-sub/658c5f91/app-example-sub-a200b003.css',
        // '/rmf-app-example-sub/658c5f91/app-example-sub-b889c22.js'
      ],
      routes: ['/app-example/sub'],
      render: 'root',
    },
  ];

  var extra = {
    defaultRoute: '/app-example/sub',
  };

  if (callback) callback(apps, extra);
})(rmfMetadataAppsCallback);
