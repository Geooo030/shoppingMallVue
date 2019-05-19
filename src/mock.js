const Mock = require('mockjs')
const Random = Mock.Random
const produceNewsData = function () {
  let articles = []
  // let index= Random.integer(0, 9)
  for (let i = 0; i < 10; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 10), //  Random.csentence( min, max )
      id: i,
      num: 0,
      pic: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles.push(newArticleObject)
  }
  return {
    articles: articles
  }
}
const one = {
  title: Random.csentence(5, 10), //  Random.csentence( min, max )
  pic: Random.dataImage('300x300', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
  author: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
  date: Random.date() + ' ' + Random.time(),
  rate: Random.float(0, 5, 2, 2),
  sellnum: Random.integer(0, 500),
  sellmon: Random.integer(0, 1000),
  price: Random.integer(0, 300),
  detailimg: Random.dataImage('600*1200', '详情图片'),
  info: Random.paragraph(1, 1),
  num: 0,
  pics: [
    Random.dataImage('300x300', 'mock的图片'), Random.dataImage('300x300', 'mock的图片'), Random.dataImage('300x300', 'mock的图片'), Random.dataImage('300x300', 'mock的图片'), Random.dataImage('300x300', 'mock的图片'),
  ],
  sort: [{
      name: Random.csentence(2, 6),
      price: Random.integer(0, 100),
      pic: Random.dataImage('300x300', 'mock的图片'),
      color: '#888',
      checked: 'false',
      deleCheck: 'false'
    },
    {
      name: Random.csentence(2, 6),
      pic: Random.dataImage('300x300', 'mock的图片'),
      color: '#888',
      price: Random.integer(0, 100),
      checked: 'flase',
      deleCheck: 'false'
    }
  ]
}
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', produceNewsData)
Mock.mock('/news/detail', one)
let list = [];
for (let i = 0; i < 60; i++) {
  list[i] = {
    title: Random.csentence(5, 8), //  Random.csentence( min, max )
    pic: Random.dataImage('300x300', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
    author: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
    date: Random.date() + ' ' + Random.time(),
    rate: Random.float(0, 5, 2, 2),
    sellnum: Random.integer(0, 500),
    sellmon: Random.integer(0, 1000),
    price: Random.integer(0, 300),
    detailimg: Random.dataImage('600*1200', '详情图片'),
    info: Random.paragraph(1, 1),
    num: 0,
    sort:[],
    sortnum: Random.integer(0, 5),
    pics: [
      Random.dataImage('300x300', 'mock的图片'), Random.dataImage('300x300', 'mock的图片'), Random.dataImage('300x300', 'mock的图片'), Random.dataImage('300x300', 'mock的图片'), Random.dataImage('300x300', 'mock的图片'),
    ],
  }
  for (let j = 0; j < Random.integer(0, 5); j++) {
    list[i].sort.push({
      name: Random.csentence(2, 6),
      price: Random.integer(0, 100),
      pic: Random.dataImage('300x300', 'mock的图片'),
      color: '#888',
      checked: 'false',
      deleCheck: 'false'
    })
  }
}
let row=15;
for (let index = 1; index <= 4; index++) {
  let params = {
      'code': 0,
      'msg': '',
      'data': []
  }
  if (index < 4) {
      Mock.mock(`/list?page=${index}`, function () {
          params.data = listJson.slice((index - 1) * rows, index * rows)
          return params
      })
  } else {
      Mock.mock(`/list?page=${index}`, function () {
          return params
      })
  }
}
Mock.mock('/list',list)