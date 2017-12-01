let express = require('express');

let app = express(); //函数要执行一下

app.get('/',function(req,res){      //http://localhost:3000/
    res.send('ok')

})

app.get('/list',function(req,res){  //http://localhost:3000/list
    res.send('这是list页面')
})

app.get('*',function(req,res){
    res.send('404，页面不存在')
})

app.listen(3000)