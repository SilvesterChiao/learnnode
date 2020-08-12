/*
 * @Author: SilvesterChiao
 * @Date: 2020-06-16 10:55:22
 * @LastEditors: SilvesterChiao
 * @LastEditTime: 2020-06-16 10:55:22
 */
var express = require('express')
var connection = require('../db/mysql.js')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express',
        articles: [
            {
                title: '男人看了沉默，女人看了流泪',
                content: '没错我就是传说中的标题党'
            },
            {
                title: '震惊！25岁女教师竟对12岁小男孩做出这种事',
                content: '此处省略不知道多少字'
            }
        ]
    })
})

router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Login' })
})

router.post('/login', function(req, res, next) {})

router.get('/user', function(req, res, next) {
    res.render('user', {
        title: 'user',
        names: ['Emily', 'Nancy']
    })
})

router.post('/addUser', function(req, res, next) {
    // res.end(req.body.userName);
    // console.log(req.body.userName);
    res.render('user', {
        title: 'user',
        names: ['Emily', 'Nancy', req.body.userName]
    })
})

// Ajax接口
router.get('/getinfo', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    var _data = { email: 'example@163.com', name: 'jaxu' }
    res.type('application/json')
    res.jsonp(_data)
})

router.get('/sites', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    return res.json({
        data: [
            {
                Name: '菜鸟教程',
                URL: 'www.runoob.com',
                Country: 'CN'
            },
            {
                Name: 'Google',
                URL: 'www.google.com',
                Country: 'USA'
            },
            {
                Name: 'Facebook',
                URL: 'www.facebook.com',
                Country: 'USA'
            },
            {
                Name: '新浪微博',
                URL: 'www.weibo.com',
                Country: 'CN'
            }
        ]
    })
})

router.post('/user', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    return res.json({
        name: 'Lili',
        age: 18,
        sex: 'female',
        friends: ['李雷', '韩梅梅', 'Jhon', 'Tom']
    })
})

router.post('/movie', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    return res.json({
        movies: [
            {
                name: '速度与激情8'
            },
            {
                name: '星球大战8'
            },
            {
                name: '加勒比海盗5'
            }
        ]
    })
})

// 热映影片
router.post('/hot', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    return res.json({
        movies: [
            {
                name: '加勒比海盗5',
                title: '传奇船长再次起航！',
                grade: 8.0,
                img: 'hot-1.jpg',
                url: '1.mp4',
                protagonist: ['约翰尼·德普', '奥兰多·布鲁姆'],
                time: 2017
            },
            {
                name: '金刚狼3',
                title: '狼叔再见！',
                grade: 8.0,
                img: 'hot-1.jpg',
                url: '2.mp4',
                protagonist: ['休·杰克曼', '帕特里克·斯图尔特'],
                time: 2017
            }
        ]
    })
})

router.get('/actor', function(req, res, next) {
    connection.connect()
    var sql = 'SELECT * FROM actor'

    connection.query(sql, function(err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ' + err.message)
            return
        }

        console.log('------------SELECT------------')
        console.log(result)
        console.log('------------------------------')
    })

    connection.end()

    res.render('actor', {
        title: 'actor',
        names: ['Emily', 'Nancy']
    })
})

module.exports = router
