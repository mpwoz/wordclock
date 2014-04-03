$(function(){

	var list = [
		['foo', 120],
		['bar', 60],
		['foo', 50],
		['bar', 40],
		['foo', 20],
		['bar', 10],
		['foo', 100],
		['bar', 90],
		['foo', 140],
		['bar', 30],
		['foo', 100],
		['bar', 200],
	];

	var list2 = [
		['foo', 120],
		['bar', 60],
		['foo', 50],
		['bar', 40],
		['foo', 20],
		['bar', 10],
		['foo', 100],
		['bar', 90],
		['foo', 140],
		['bar', 30],
		['foo', 100],
		['bar', 200],
		['bar', 200],
	];

	WordCloud($('#canvas')[0], {
		list:list,
		shuffle:false,
		wait:1000

	});

	setTimeout(function(){
		list.push(['greg', 200]);
	}, 2000);
	



});