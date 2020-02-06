"use strict";
var mypage = mypage || {};
mypage = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
	let _, js, css, img, mypage_vue_js
	let init =()=> {
		_=$.ctx()
		js=$.js()
		css=$.css()
		img=$.img()
		mypage_vue_js=js+'/vue/mypage_vue.js'
	}

	let onCreate = ()=>{
		init();
		$.when(
			$.getScript(mypage_vue_js)
		)
		.done(()=>{
			setContentView()
//			$('#btn_noticeqna').click(e=>{
//				e.preventDefault()
//				$('#body_main').empty()
//				.html(notice_vue.noticeqna_body({css: $.css(), img: $.img()}))
//				.appendTo('#body_main')
//				onCreate()
//			})
//			$('#btn_noticecus').click(e=>{
//				e.preventDefault()
//				$('#body_main').empty()
//				.html(notice_vue.noticecus_body({css: $.css(), img: $.img()}))
//				.appendTo('#body_main')
//				onCreate()
//			})
//			$('#btn_noticeinquiry').click(e=>{
//				e.preventDefault()
//				$('#body_main').empty()
//				.html(notice_vue.noticeinquiry_body({css: $.css(), img: $.img()}))
//				.appendTo('#body_main')
//				onCreate()
//			})
//			$('#btn_notice').click(e=>{
//				e.preventDefault()
//				$('#body_main').empty()
//				.html(notice_vue.notice_body({css: $.css(), img: $.img()}))
//				.appendTo('#body_main')
//				onCreate()
//			})
		})
		
	}
	
	let setContentView =()=>{
			customerlist()
			
		}

		let customerlist =()=>{
			$.getJSON(_ + '/customers/cuslist/'+sessionStorage.getItem('userno'), d =>{
				
				console.log(d)
				$(`
				<div id="wrapper">
				<table id="cmain" border="1">
				<thead id="chead">
				<tr>
				<th scope="col">#NO</th>
				<th scope="col">제목</th>
				<th scope="col">작성자</th>
				<th scope="col">작성자</th>
				<th scope="col">작성자</th>
				<th scope="col">작성자</th>
				<th scope="col">작성자</th>
				<th scope="col">작성자</th>
				</tr>
				</thead>
				<tbody id="cbody">
				</tbody>
				</table>
				</div>
				`).appendTo('#myTabContent')

		$.each(d.cuslist, (i, j) => {
			var tr = $(`<tr></tr>`).appendTo("#cbody");
				$(`<td></td>`).text(j.cid).appendTo(tr);
				$(`<td><a href="#">${j.cpw}</a></td>`).appendTo(tr)
				$(`<td></td>`).text(j.cname).appendTo(tr);
				$(`<td></td>`).text(j.email).appendTo(tr);
				$(`<td></td>`).text(j.pnumber).appendTo(tr);
				$(`<td></td>`).text(j.invest).appendTo(tr);
				$(`<td></td>`).text(j.rating).appendTo(tr);
				})
			})
		}
	
	return {onCreate}
})();