var routes = require('./routes');

module.exports = function(app) {
    app.get('/', routes.index);
    app.get('/contact', routes.contact);
    app.get('/projects', routes.projects);
    app.get('/events', routes.events);
};