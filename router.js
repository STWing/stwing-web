var routes = require('./routes');
var jpf = require('./routes/jpf');

module.exports = function(app) {
    app.get('/', routes.index);
    app.get('/contact', routes.contact);
    app.get('/projects', routes.projects);
    app.get('/events', routes.events);

    app.get('/jpf', jpf.index);
    app.get('/jpf/background', jpf.background);
    app.get('/jpf/rules', jpf.rules);
    app.get('/jpf/apply', jpf.apply);
    app.post('/jpf/apply', jpf.process_submission);
    app.get('/jpf/thankyou', jpf.thankyou);
};