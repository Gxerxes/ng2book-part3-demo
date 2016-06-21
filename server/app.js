var jsonServer = require('json-server');

var webshot = require('webshot');
var fs = require('fs');

var uuid = require('node-uuid');

var crypto = require('crypto');

var md5 = function(str) {
  return crypto
    .createHash('md5')
    .update(str.toString())
    .digest('hex');
};

var dbfile = process.env.prod === '1' ? 'db.json' : '_db.json';

// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());

var bodyParser = require('body-parser');
// parse application/json
server.use(bodyParser.json());

// get userinfo
server.get('/user/:username', function(req, res) {
  var user = db('user')
    .find({
      username: req.params.username
    });

  res.json({
    success: true,
    data: {
      username: user.username,
      createDate: user.createDate
    }
  });
});

// register
server.post('/user/add', function(req, res) {
  var item = req.body;
  var user = db('user')
    .find({
      username: item.username
    });
  if (user) {
    res.json({
      success: false,
      message: 'username `' + item.username + '` is exists'
    })
  } else {
    item.password = md5(item.password);
    item.createDate = new Date().toLocaleDateString();
    db('user')
      .push(item)
      .then(function() {
        res.json({
          success: true
        });
      });
  }
});

// login
server.post('/login', function(req, res) {
  var data = req.body || {};
  var username = data.username;
  var user = db('user')
    .find({
      username: username
    });

  if (user && user.password === md5(data.password)) {
    // todo reset session
    res.json({
      success: true
    });
  } else {
    res.json({
      success: false,
      message: 'username or password error'
    });
  }
});

// Add custom routes
server.get('/custom', function(req, res) {
  res.json({
    msg: 'hello'
  });
});

// Todo: using json server export lowdb instance?
var low = require('lowdb');
var storage = require('lowdb/file-async');
var db = low(dbfile, {
  storage: storage
});

function renderQuestionaire(qdata, res) {
  res.write('This will be render by template engine');
  res.write('with questionnaire data like below:');
  res.write(JSON.stringify(qdata, null, 2));
  res.end('this is end');
}

function generateThumbnail(id) {
  webshot('http://localhost:3000/admin/edit/' + id, './public/thumbnails/' + id + '.png', function(err) {
    if (err) {
      console.log('create thumbnail for ' + id + ' failure');
      console.log(err);
    }
  });
}

server.post('/questionnaire/preview', function(req, res) {
  var qdata = req.body;
  renderQuestionaire(qdata, res);
});

server.get('/questionnaires', function(req, res) {
  var questionnaires = db('questionnaires');
  res.json({
    success: true,
    data: questionnaires
  });
});

server.get('/questionnaire/:id', function(req, res) {
  var questionnaire = db('questionnaires').find({
    id: req.params.id
  });
  res.json({
    success: true,
    data: questionnaire
  });
});

server.post('/questionnaire/add', function(req, res) {
  var item = req.body;
  item.id = uuid.v1();
  item.createDate = new Date().toLocaleDateString();
  db('questionnaires').push(item).then(function() {
    res.json({
      success: true,
      data: item
    });
  });
});

server.post('/questionnaire/update', function(req, res) {
  var item = req.body;
  db('questionnaires').chain().find({
    id: item.id
  }).assign(item).value();
  res.json({
    success: true,
    data: item
  });
});

server.post('/questionnaire/publish', function(req, res) {
  var item = req.body;
  db('questionnaires').chain().find({
    id: item.id
  }).assign({
    state: 2
  }).value();
  res.json({
    success: true,
    data: item
  });
});

//get questionnaire page thumbnail
server.get('/questionnaire/thumbnail/:id', function(req, res) {
  res.writeHead(200);
});

// Returns an Express router
var router = jsonServer.router(dbfile);
server.use('/api', router);

server.listen(8100, function() {
  console.log('server is running at ', 8100, dbfile);
});