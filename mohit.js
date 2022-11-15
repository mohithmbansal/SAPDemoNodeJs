const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

const port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});

/*const express = require('express')
const app = express();

app.get('/test' , (request, response)=>{
console.log("MOhit How are you ?")
console.log(request.query.user)
response.send('welcome sir')
})

app.listen(4000, ()=>{
console.log('server is running on 4000')

})

console.log('welcome Mohit')

*/