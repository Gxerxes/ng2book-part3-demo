var jsonServer = require('json-server')

var webshot = require('webshot');
var fs = require('fs');

// Returns an Express server
var server = jsonServer.create()

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults())

var bodyParser = require('body-parser')
// parse application/json
server.use(bodyParser.json())


// Add custom routes
server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) })


// Todo: using json server export lowdb instance?
const low = require('lowdb')
const storage = require('lowdb/file-sync')
const db = low('db.json', {storage:storage})

function renderQuestionaire(qdata, res) {
  res.write('This will be render by template engine')
  res.write('with questionnaire data like below:')
  res.write(JSON.stringify(qdata, null, 2))
  res.end('this is end')
}

server.get('/questionnaire/:id', function(req, res) {
  var qdata = db('posts').find({id: +req.params.id})
  renderQuestionaire(qdata, res) // Todo
})

server.post('/questionnaire/preview', function(req, res) {
  debugger;
  var qdata = req.body
  renderQuestionaire(qdata, res)
})

server.post('/questionnaire/add', function(req, res){
  var item = req.body;
  item.id = db('index') + 1;
  db('questionnaires').push(item);
  res.json({'success':true});
});

//get questionnaire page thumbnail
server.get('/questionnaire/thumbnail/:id', function(req,res){
  res.writeHead(200);

  webshot('baidu.com', './public/thumbnails/thumb_'+req.params.id+'.png', function(err){
    if(err){
      res.end('create failure');
    }else{
      res.end('create success');
    }
  });
})

// Returns an Express router
var router = jsonServer.router('db.json')
server.use('/api', router)

server.listen(8100, function() {
  console.log('server is running at ', 8100)
})