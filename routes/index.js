
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Science and Technology Wing' });
};

exports.contact = function(req, res) {
    res.render('contact', { title: 'Contact us' });
};

exports.projects = function(req, res) {
    res.render('projects', { title: 'Projects' });
};

exports.events = function(req, res) {
    res.render('events', { title: 'Calendar of events' });
};