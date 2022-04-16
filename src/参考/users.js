var express = require('express');
var router = express.Router();
const fileUp = require('../utils/fileUtils')


//修改个人头像
router.post('/upicon',async function(req,res){
  let head_imgUrl = await fileUp.upload(req,{fileDir:'public/file_avator'})
  res.send(head_imgUrl)
})

module.exports = router;
