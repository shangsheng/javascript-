(function(screl){
	var init,
		array = [],
		push = array.push(),
        document = screl.document;
	const arrHader = ['头像','姓名','性别','年龄','手机号','国籍','爱好','头衔','操作'];
	const arrTbody = [
		{
			face:{imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583671638490&di=957e858d102bae600e6b5472843bdfe6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F20%2F20180220165946_RiGPS.thumb.700_0.jpeg'},
			gender:0,
			name:'小龙女',
			nickname:'夏末的晨曦',
			age:'25',
			ageName:'单身狗',
			phone:'13588888888',
			phoneCode:' +86',
			phoneName:'中国',
			nationalFlag:{nationalImgSrc:'http://www.web-jshtml.cn/curriculum/javascript/images/china.jpg',nationalColor:'red'},
			likes:[{likesColor:'#468d9c',likesName:'跑步'},{likesColor:'#469c4e',likesName:'看电影'},{likesColor:'#9c468b',likesName:'二次元'},{likesColor:'#9c4646',likesName:'小猫小狗'},{likesColor:'#b9af10',likesName:'小说'}],
			grade:{gradeName:'小白',gradeWidth:'33.33332%'}
		}
	]
    const $ = screl.$;
	var itcast = function (screl){
		return itcast.fn.init(screl)
	}
	itcast.fn =  itcast.prototype = {
		constructor:itcast,
		init:function (screl){
            const tableData = document.getElementById(screl);
			tableData.appendChild(itcast.iscreate('table-wrap'));
			const tables = document.querySelector("#table-wrap");
			tables.appendChild(itcast.isTableBody(arrTbody));
			//分页
			tableData.appendChild(itcast.ispage(1,10));
		},
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
                trTh = trTh+'<th>'+arrHader[i]+'</th>';
            }
            tr.innerHTML = trTh;
            theads.appendChild(tr);
            domTatle.appendChild(theads);
            return domTatle;
		},
		//创建dom
		isTttdData:function(json){
			const div = document.createElement(json.domName);
			console.log(div)
			for(let key in json){
				if(key != 'domName'&&key != 'html'){
					div.setAttribute(key,json[key])
				}else if(key == 'html'){
					div.innerHTML = json.html;
				}
			}
			
			return div;
		},
		//创建操作dom
		isOperation:function(){
			
			const ulLink = ['编辑','删除','锁定','收起'];
			const div = itcast.isTttdData({domName:'div',class:'operation'});
			const ul = itcast.isTttdData({domName:'ul',class:'links'});
			div.appendChild(itcast.setAttr(itcast.isTttdData({domName:'a',html:'设置',class:'operation-btn'}),{'href':'javascript: void(0);'}));
			for(let i=0;i<ulLink.length;i++){
				ul.appendChild(itcast.setAttr(itcast.isTttdData({domName:'a',html:ulLink[i]}),{'href':'javascript: void(0);'}));
				
			}
			div.appendChild(ul);
			return div;
		},
		//创建分页
		ispage:function(currentNum,pageLength){
			
			const div = itcast.isTttdData({domName:'div',class:'pagination'});
			div.appendChild(itcast.isTttdData({domName:'span',html:'上一页'}));
			for(let i=0;i<pageLength;i++){
				if(i==currentNum-1) {
				
					div.appendChild(itcast.setAttr(itcast.isTttdData({domName:'a',html:i+1,class:'current'}),{'href':'javascript: void(0);'}));
				}else{
					div.appendChild(itcast.setAttr(itcast.isTttdData({domName:'a',html:i+1}),{'href':'javascript: void(0);'}));
				}
				
			}
			div.appendChild(itcast.isTttdData({domName:'span',html:'下一页'}));
			return div;
		},
		setAttr:function(nodes,style){
			
			for(let key in style){
				nodes.setAttribute(key,style[key]);
			}
			return nodes
		},
		//创建内容
		isTableBody:function(arr){
			const tbody = itcast.isTttdData({domName:'tbody'});
			for(let i=0; i<arr.length; i++){
				const tr = itcast.isTttdData({domName:'tr'});
				for(let key in arr[i]){
					const td = itcast.isTttdData({domName:'td'});
					if(key == 'face' && arr[i].face != undefined){
						const divFace = itcast.isTttdData({domName:'div',class:'face'});
					
						divFace.appendChild(itcast.setAttr(itcast.isTttdData({domName:'span'}),{'class':arr[i].gender==0?'gender icon-boy':'gender icon-girl'}));
						divFace.appendChild(itcast.isTttdData({domName:'img',src:arr[i].face.imgSrc}));
						td.appendChild(divFace);
						tr.appendChild(td);
						continue;
					}else if(key == 'name' && arr[i].name != undefined){
						const divName = itcast.isTttdData({domName:'div',class:'people-name'});
						
						divName.appendChild(itcast.isTttdData({domName:'h4',class:'name',html:arr[i].name}));
						console.log()
						divName.appendChild(itcast.isTttdData({domName:'span',html:'昵称:'+arr[i].nickname,class:'nickname option-05 fs-12',style:arr[i].nickname!=undefined?'display':'none'}));
						td.appendChild(divName);
						tr.appendChild(td);
						continue;
					}else if(key == 'gender' &&  arr[i].gender != undefined){
						const divGender = itcast.isTttdData({domName:'div',class:'gender-wrap'});
						
						divGender.appendChild(itcast.isTttdData({domName:'span',class:arr[i].gender==0?'gender icon-boy':'gender icon-girl'}));
						td.appendChild(divGender);
						tr.appendChild(td);
						continue;
					}else if(key == 'age' && arr[i].age != undefined){
						const divAge = itcast.isTttdData({domName:'div',class:'age text-center'});
						divAge.appendChild(itcast.isTttdData({domName:'p',html:arr[i].age}));
						divAge.appendChild(itcast.isTttdData({domName:'span',class:'option-05 fs-12',html:'('+arr[i].ageName+')',style:arr[i].ageName?'display':'none'}));
						td.appendChild(divAge);
						tr.appendChild(td);
						continue;
					}else if(key == 'phone' && arr[i].phone != undefined){
						const divPhone = itcast.isTttdData({domName:'div',class:'phone',html:arr[i].phoneCode+'<span class="option-05">('+arr[i].phoneName+')</span><br/>'+arr[i].phone});
						
						td.appendChild(divPhone);
						tr.appendChild(td);
						continue;
					}else if(key == 'nationalFlag' && arr[i].nationalFlag != undefined){
						const divFlag = itcast.isTttdData({domName:'div'});
						
						divFlag.appendChild(itcast.isTttdData({domName:'img',src:arr[i].nationalFlag.nationalImgSrc}));
						divFlag.appendChild(itcast.isTttdData({domName:'p',style:'color:'+arr[i].nationalFlag.nationalColor,html:arr[i].phoneName}));
						td.appendChild(divFlag);
						tr.appendChild(td);
						continue;
					}else if(key == 'likes' && arr[i].likes != undefined){
						const divLikes = itcast.isTttdData({domName:'div',class:'likes'});
						for(let j=0;j<arr[i].likes.length;j++){
							divLikes.appendChild(itcast.isTttdData({domName:'span',style:'background-color:'+arr[i].likes[j].likesColor,html:arr[i].likes[j].likesName}));
						}
						td.width = '220';
						td.appendChild(divLikes);
						tr.appendChild(td);
						continue;
					}else if(key == 'grade' && arr[i].grade !=undefined){
						const divGrade = itcast.isTttdData({domName:'div',class:'grade'});
						const divGradeWrap = itcast.isTttdData({domName:'div',class:'grade-wrap icon-grade'});
						divGrade.appendChild(itcast.isTttdData({domName:'div',class:'role-name',html:arr[i].grade.gradeName}));
						divGradeWrap.appendChild(itcast.isTttdData({domName:'div',style:'width:'+arr[i].grade.gradeWidth,class:'grade-high icon-grade'}));
						divGrade.appendChild(divGradeWrap);
						td.appendChild(divGrade);
						tr.appendChild(td);
						continue;
					}
				
				}
				const tds = itcast.isTttdData({domName:'td'});
				tds.appendChild(itcast.isOperation());
				tr.appendChild(tds);
				tbody.appendChild(tr);
			}
			return tbody;
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