(function(screl){
	var init,
		array = [],
		push = array.push(),
        document = screl.document;
    const arrHader = ['头像','姓名','性别','年龄','手机号','国籍','爱好','头衔','操作'];
    const $ = screl.$;
	var itcast = function (screl){
		return itcast.fn.init(screl)
	}
	itcast.fn =  itcast.prototype = {
		constructor:itcast,
		init:function (screl){
            const tableData = document.getElementById(screl);
            tableData.appendChild(itcast.iscreate('table-wrap'));
		}
	}
	

	itcast.extend = function(){
		var agm = arguments,
			l = agm.length,
			i = 0,
			arr = [],
			k;
			for(;i<l;i++){
				arr = agm[i];
				for(k in arr){
					if(itcast.fn.hasOwnProperty.call(arr,k)){
						this[k] = arr[k]
					}
				}
			}
			return this
	}
	// click操作
	itcast.extend({
		
	})
	
	//判断传入属性
	itcast.extend({
        //创建表格
		iscreate:function(doms){
            const domTatle = document.createElement('table');
                domTatle.setAttribute('width','100%');
                domTatle.setAttribute('cellpadding','0');
                domTatle.setAttribute('cellspacing','0');
                domTatle.setAttribute('border','0');
                domTatle.setAttribute('id',doms);
            const theads = document.createElement('thead');
            const tr = document.createElement('tr');
            let trTh = '';
            for(var i=0;i<arrHader.length;i++){
                trTh = '<th>'+arrHader[i]+'</th>'+trTh;
            }
            tr.innerHTML = trTh;
            theads.appendChild(tr);
            domTatle.appendChild(theads);
            return domTatle;
        }
	})
	
	itcast.fn.init.prototype = itcast.fn;
	if(typeof define !== 'undefined'){
		return itcast
	}else if(typeof exports !== 'undefined'){
		module.exports = itcast
	}else{
		screl.tableDome = itcast
	}
	
})(window);
//生产表格
tableDome('table-data-wrap');