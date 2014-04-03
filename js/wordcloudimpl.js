(function(Cloud, undefined){

	Cloud.list = [
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





	Cloud.addWord=function(word,size){
		if(this.list.length<100){
			this.list.push([word, size]);
		}else {
			this.list=[];

		}
	}

	Cloud.run = function(){
		WordCloud($('#canvas')[0], {
			list:Cloud.list,
			shuffle:false,
			wait:500

		});
	}
	



}(window.Cloud=window.Cloud || {}));