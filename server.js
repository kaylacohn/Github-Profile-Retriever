'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.register(require('inert'), (err) => {
    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
          directory: {
            path: './',
            index: true
          }
        }
    });
});

server.start(() => {
    console.log('Server running at:', server.info.uri);
});
