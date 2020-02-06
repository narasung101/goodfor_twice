"use strict";
var customer = customer || {};
customer = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
	let _, js, css, img, customer_vue_js, brd_js, brd_vue_js
	let init =()=> {
		_=$.ctx()
		js=$.js()
		css=$.css()
		img=$.img()
		brd_vue_js = js+'/vue/brd_vue.js'
		brd_js = js+'/brd/brd.js'
	}

	let onCreate = ()=>{
		init();
		$.when(
			$.getScript(brd_vue_js),
			$.getScript(brd_js)
		)
		.done(()=>{
			brd_move()	
			})		
			
	}
	
	let brd_move =()=>{
		
		$('#btn_faqView').click(e=>{
			e.preventDefault()
			alert('자주하는 질문 클릭')
			$('body_main').empty()
			brd.toggleList()
			
		})
		
		$('#btn_customerView').click(e=>{
			e.preventDefault()
			alert('고객 클릭')
			$('body_main').empty()
			brd.onCreate(2)
			
						
		})
		
		$('#btn_customerView').click(e=>{
			e.preventDefault()
			alert('고객 클릭')
			$('body_main').empty()
			brd.onCreate(3)
						
		})
		
		$('#btn_noticeView').click(e=>{
			e.preventDefault()
			alert('공지사항 클릭')
			$('body_main').empty()
			brd.onCreate(4)
			
		})
		
	}
	
	return {onCreate}
})();