var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348';

function filterPic(html){
	var $ = cheerio.load(html);
	var pics = $('img');
	var picsInfo = [];

	pics.each(function(item){
		var pic = $(this);
		var src = pic.attr('src');
		var picInfo = {
			src : src
		};
		picsInfo.push(picInfo);
	});
	
	//返回图片信息
	return picsInfo;
}

function printPicInfo(picsInfo){
	picsInfo.forEach(function(item){
		var src = item.src;
		console.log(src + '\n');
	});
}

http.get(url,function(res){
	var html = '';

	res.on('data',function(data){
		html += data;
	});

	res.on('end',function(){
		var picsInfo = filterPic(html);
		printPicInfo(picsInfo);
	});
}).on('error',function(){
	console.log('获取图片数据出错！');
});