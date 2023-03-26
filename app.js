import 'dotenv/config'
import express from 'express';
import { checkText } from './chatgpt.js'
var app = express();

app.set('view engine', 'ejs')

// public access to assets for app
app.use(express.static('public'))

app.get('/', async function (req, res) {
  const responseData = await checkText();
  console.log(responseData)
  res.render('index', {responseData:responseData});
});


/* 
Returns the binary
 app.get('/downloadPayLoadBucketObjects/:key', async function (req, res, next) {
  const bucketData = await downloadObject(req.params.key)
  //res.locals.bucketData = await bucketList()
  res.send(Buffer.from(bucketData)); 
})
 */

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
}); 