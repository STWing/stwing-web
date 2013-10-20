exports.index = function(req, res) {
    res.render('jpf/index', {
        title: 'John C. Parker Fellowship for undergraduate research'
    });
};

exports.background = function(req, res) {
    res.render('jpf/background', { title: 'Background and history of the JPF' });
};

exports.rules = function(req, res) {
    res.render('jpf/rules', { title: 'Rules and eligibility' });
};

exports.apply = function(req, res) {
    res.render('jpf/apply', { title: 'Online application' });
};

exports.thankyou = function(req, res) {
    res.render('jpf/thankyou', { title: 'Thank you for your submission' });
}

exports.process_submission = function(req, res) {
    console.log(req.body.application);
    console.log(req.files);

    res.redirect('/jpf/thankyou');
};