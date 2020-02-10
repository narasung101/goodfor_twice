"use strict"
var brd = brd || {}
brd = (() => {
	const WHEN_ERR = '호출하는 JS파일을 찾을 수 없습니다.'
	let _, js, brd_vue_js, css, img, type
	let init = x => {
		_ = $.ctx()
		js = $.js()
		img = $.img()
		css = $.css()
	    brd_vue_js = js + '/vue/brd_vue.js'
	   type = x
		
	}
	let onCreate = x => {
		
		init(x)

		$.when(
			$.getScript(brd_vue_js)			
		
		).done(() => {
			setContentView()
			
			
			
		}).fail(() => {
			alert('실패')
		})
	}
	let setContentView = () => {
		$('#body_main').empty()
		if(type==3){

			list({ctype: type, pageSize: 5, nowPage: 0, img: $.img()})
		}
		else{

			listNotice({ctype: type, pageSize: 5, nowPage: 0, img: $.img()})
		}
		
		
		//list({ pageSize: 5, nowPage: 0, option:$('#selectOption').val(), search: $('#search').val()})
	
	}
		
	let list = x => {

		$.getJSON(_ + '/boards/list/'+x.ctype+'/'+x.pageSize+'/'+x.nowPage+'/'+x.option+'/'+x.search, d => {
			
			$('#body_main').empty()
			
					
			$(`
		<style>
		#ContentPlaceHolder1_div_wts p span {
			color: #179ede;
			font-size: 16px;
			font-family: "맑은고딕","Malgun Gothic","돋움", "dotum", "verdana", sans-serif;
		    line-height: 20px;
		    letter-spacing: -1px;		
		} 
		</style>
		
		<div class="container">
		<div id="wrapper">
		
		<h1 id="btn_customerGo" style="margin-bottom: 20px;"><img src="${x.img}/customer.png" style="width: 30px;">&nbsp;&nbsp;고객게시판</h2>
		
		<div id="ContentPlaceHolder1_div_wts" class="alert alert-light" role="alert" style="margin-bottom: 20px;">
				<p style="font-size: large;">고객님의 <span>궁금한 사항</span>을 <span>빠르고 친절하게</span> 처리해 드립니다. </p>
				<p class="lineTxt" style="font-size: small">굿포를 이용하시는데 불편하신 사항이나 의견이 있으시면 말씀해주세요. 고객님의 의견을 적극 반영하여 개선하도록 하겠습니다. </p>
		</div>
			
		<div id="search_form" class="btn btn-default pull-right" style="font-size: small;padding-right: 0px;">
		
		</div>

		<table class="table table-striped" border="1">
				
			<thead>
				<tr>
					<th>번호</th>
					<th>제목</th>
					<th>작성자</th>
					<th>작성일</th>
					<th>조회</th>
				</tr>
			</thead>
			
			<tbody>
			
			</tbody>
		</table>

		<div id="page_form">
		
		</div>

			<div>
				<ul class="pagination" id="list_pageForm" style="justify-content: center; margin-bottom: 0px;">
				</ul>
			</div>

				
		<button id="btn_brd" class="btn btn-default pull-right" style="border: solid 1px; width: 77px;">글쓰기</button>
		
		</div>
		</div>
		`).appendTo('#body_main')
		
		write(type)
			
		$('#btn_list').click(e => {
		e.preventDefault()
		$('#crawlTab').empty()
		$('#tmain').empty()
		 list({ ctype: type, pageSize: 5, nowPage: 0 })
		// list({ pageSize: 5, nowPage: 0, option:$('#selectOption').val(),
		// search: $('#search').val()})
		
		})				
									
			$.each(d.list, (i, j) => {
				console.log(d.list)
				var tr = $(`<tr></tr>`).appendTo("tbody");
				$(`<td></td>`).text(j.seq).appendTo(tr);
				$(`<td><a href="#">${j.title}</a></td>`).appendTo(tr)
				.click(e=>{
					e.preventDefault()
					alert('seq 확인'+ j.seq)
										
					$.getJSON(_ + '/boards/content/'+j.seq, d =>{
						
						content(d)						
					})
				});
				$(`<td></td>`).text(j.writer).appendTo(tr);
				$(`<td></td>`).text(j.credate).appendTo(tr);
				$(`<td></td>`).text(j.viwecnt).appendTo(tr);

			})
		
			if (d.pager.existPrev) {
				$(`<span style="border:1px solid black; padding-left: 5px; padding-right: 5px; class="btn-page">이전</span>`)
					.appendTo('#page_form')
					.click((e) => {
						e.preventDefault()
						alert('이전 페이지 클릭' + d.pager.prevBlock)
						 list({ ctype: type, pageSize: 5, nowPage: d.pager.prevBlock })
						//list({pageSize:5, nowPage:d.pager.prevBlock})
					
					})
			}

			let blocks = []
			for (let i = d.pager.startPage + 1; i <= d.pager.endPage + 1; i++) {
				blocks.push(i)

			}

			$.each(blocks, (i, j) => {
				$(`<li class="page-item">
					      <a href="#">${j}</a>
				</li>`)
					.appendTo('#list_pageForm')
					.click(function (e) {
						e.preventDefault()
						alert('a링크 클릭' + $(this).text())
						
						 list({ ctype: type, pageSize: 5, nowPage: (Number($(this).text()) - 1) })
					   // list({pageSize: 5, nowPage: (Number($(this).text()) - 1), option:$('#selectOption').val(), search: $('#search').val()})

					})
			})
			if (d.pager.existNext) {
				$(`<span style="border:1px solid black; padding-left: 5px; padding-right: 5px; class="btn-page">다음</span>`)
					.appendTo('#page_form')
					.click(function (e) {
						e.preventDefault()
						alert('다음 페이지 클릭' + d.pager.nextBlock)
						 list({ ctype: type, pageSize: 5, nowPage: d.pager.nextBlock })
						// list({pageSize: 5, nowPage: d.pager.nextBlock, option:$('#selectOption').val(), search: $('#search').val()})

					})
			}
			
//			<form>
//			페이지 사이즈 입력 <input type="text" id="pageSize" />
//			<input id="btn_page_size" type="submit" value="입력" />
//			</form>	
		
		$(`
				
		<form>
		 <select id="pageSize">
		  <option value="5">5개씩 </option>
		  <option value="10">10개씩</option>
		  <option value="15">15개씩</option>
		</select>
		<input id="btn_page_size" type="submit" value="보기">
		</form>
			
		`).appendTo('#page_size_form')
	
		
			$('#btn_page_size').click(e => {
				e.preventDefault()
				list({ ctype: type, pageSize: $('#pageSize').val(), nowPage: 0 })
				 //list({ pageSize: $('#pageSize').val(), nowPage: 0, option:$('#selectOption').val(), search: $('#search').val() })
			})
			
		 $(`
		 <select id="selectOption">
		  <option value="title">제목</option>
		  <option value="content">내용</option>
		  <option value="writer">작성자</option>
		</select>
	
		 <input type="text" id="search"/>	 	
		 <input id="btn_search" type="submit" value="입력"/> 
		 `)
		 .appendTo('#search_form')
		  $('#btn_search').click(e=>{
			 e.preventDefault()
			 alert('서치' + $('#search').val()+", 옵션:"+$('#selectOption').val())
			 list({ ctype:type, pageSize: 5, nowPage: 0, option:$('#selectOption').val(), search: $('#search').val() })
			 //list({ pageSize: 5, nowPage: 0, option:$('#selectOption').val(), search: $('#search').val() })
			
		 })
			
		})
				

	}
	
	let listNotice = x => {

		$.getJSON(_ + '/boards/list/'+x.ctype+'/'+x.pageSize+'/'+x.nowPage+'/'+x.option+'/'+x.search, d => {
			
			$('#body_main').empty()
			
					
			$(`
			
		<div class="container">
		<div id="wrapper">
		<h1 id="btn_customerGo">공지사항</h2>
	
		<div id="search_form">
		
		</div>

		<table class="table table-striped" border="1">
						
			<thead>
				<tr>
					<th>제목</th>
					<th>작성일</th>
					<th>조회</th>
				</tr>
			</thead>
			
			<tbody>
			
			</tbody>
			
		</table>

			<div>
				<ul class="pagination" id="page_form" style="justify-content: center;">
				</ul>
			</div>

		<div id="page_size_form">
		
		</div>
		<button id="btn_brd" class="btn btn-default pull-right" style="border: solid 1px; width: 77px;">글쓰기</button>
		
		</div>
		</div>
		`).appendTo('#body_main')
		
		write(type)
			
		$('#btn_list').click(e => {
		e.preventDefault()
		$('#tmain').empty()
		 list({ ctype: type, pageSize: 5, nowPage: 0 })
		// list({ pageSize: 5, nowPage: 0, option:$('#selectOption').val(),
		// search: $('#search').val()})
		
		})				
									
			$.each(d.list, (i, j) => {
				console.log(d.list)
				var tr = $(`<tr></tr>`).appendTo("tbody");
				
				$(`<td><a href="#">${j.title}</a></td>`).appendTo(tr)
				.click(e=>{
					e.preventDefault()
					alert('seq 확인'+ j.seq)
										
					$.getJSON(_ + '/boards/content/'+j.seq, d =>{
						
						content(d)						
					})
				});
				$(`<td></td>`).text(j.credate).appendTo(tr);
				$(`<td></td>`).text(j.viwecnt).appendTo(tr);

			})
		
			if (d.pager.existPrev) {
				$(`<span style="border:1px solid black; padding-left: 5px; padding-right: 5px; class="btn-page">이전</span>`)
					.appendTo('#page_form')
					.click((e) => {
						e.preventDefault()
						alert('이전 페이지 클릭' + d.pager.prevBlock)
						 list({ ctype: type, pageSize: 5, nowPage: d.pager.prevBlock })
						//list({pageSize:5, nowPage:d.pager.prevBlock})
					
					})
			}

			let blocks = []
			for (let i = d.pager.startPage + 1; i <= d.pager.endPage + 1; i++) {
				blocks.push(i)

			}
//			<div class="text-center">
//			<ul class="pagination">
//				<li><a href="#">1</a></li>
//				<li><a href="#">2</a></li>
//				<li><a href="#">3</a></li>
//				<li><a href="#">4</a></li>
//				<li><a href="#">5</a></li>
//			</div>
			
			$.each(blocks, (i, j) => {
//				$(`<span style="border:1px solid black; padding-left: 5px; padding-right: 5px; class="btn-page"><a href="">${j}</a></span>`)
				$(`<li class="page-item">
				   <a href="#">${j}</a>
					</li>`)
				.appendTo('#page_form')
					.click(function (e) {
						e.preventDefault()
						alert('a링크 클릭' + $(this).text())
						
						 list({ ctype: type, pageSize: 5, nowPage: (Number($(this).text()) - 1) })
					   // list({pageSize: 5, nowPage: (Number($(this).text()) - 1), option:$('#selectOption').val(), search: $('#search').val()})

					})
			})
			if (d.pager.existNext) {
				$(`<span style="border:1px solid black; padding-left: 5px; padding-right: 5px; class="btn-page">다음</span>`)
					.appendTo('#page_form')
					.click(function (e) {
						e.preventDefault()
						alert('다음 페이지 클릭' + d.pager.nextBlock)
						 list({ ctype: type, pageSize: 5, nowPage: d.pager.nextBlock })
						// list({pageSize: 5, nowPage: d.pager.nextBlock, option:$('#selectOption').val(), search: $('#search').val()})

					})
			}
			
//			<form>
//			페이지 사이즈 입력 <input type="text" id="pageSize" />
//			<input id="btn_page_size" type="submit" value="입력" />
//			</form>	
		
		$(`
				
		<form>
		 <select id="pageSize">
		  <option value="5">5개씩 </option>
		  <option value="10">10개씩</option>
		  <option value="15">15개씩</option>
		</select>
		<input id="btn_page_size" type="submit" value="보기">
		</form>
			
		`).appendTo('#page_size_form')
	
		
			$('#btn_page_size').click(e => {
				e.preventDefault()
				list({ ctype: type, pageSize: $('#pageSize').val(), nowPage: 0 })
				 //list({ pageSize: $('#pageSize').val(), nowPage: 0, option:$('#selectOption').val(), search: $('#search').val() })
			})
			
		 $(`
		 <select id="selectOption">
		  <option value="title">제목</option>
		  <option value="content">내용</option>
		  <option value="writer">작성자</option>
		</select>
	
		 <input type="text" id="search"/>	 	
		 <input id="btn_search" type="submit" value="입력"/> 
		 `)
		 .appendTo('#search_form')
		  $('#btn_search').click(e=>{
			 e.preventDefault()
			 alert('서치' + $('#search').val()+", 옵션:"+$('#selectOption').val())
			 list({ ctype:type, pageSize: 5, nowPage: 0, option:$('#selectOption').val(), search: $('#search').val() })
			 //list({ pageSize: 5, nowPage: 0, option:$('#selectOption').val(), search: $('#search').val() })
			
		 })
			
		})
				

	}
	
	let toggleList =()=>{
		$('#body_main').empty()
		$('#body_main').append(customer_vue.customer_head({css: $.css()}))

		$(`
		<div class="container">
			<h2>자주 하는 질문</h2>
				<p>In this example we have added a "plus" sign to each button. When the user clicks on the button, the "plus" sign is replaced with a "minus" sign.</p>
				<button class="accordion">Section 1</button>
				<div class="panel">
				  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
				
				<button class="accordion">Section 2</button>
				<div class="panel">
				  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
				
				<button class="accordion">Section 3</button>
				<div class="panel">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
				
				<button class="accordion">Section 3</button>
				<div class="panel">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
				
				<button class="accordion">Section 3</button>
				<div class="panel">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
				
				<button class="accordion">Section 3</button>
				<div class="panel">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
				
				<button class="accordion">Section 3</button>
				<div class="panel">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
			</div>
		`).appendTo('#body_main')
		
		var acc = document.getElementsByClassName("accordion");
	
		let i;

		for (i = 0; i < acc.length; i++) {
			$('button[class="accordion"]')[i].addEventListener("click", function() {
		    this.classList.toggle("active");
		    var panel = this.nextElementSibling;
		    if (panel.style.maxHeight) {
		      panel.style.maxHeight = null;
		    } else {
		      panel.style.maxHeight = panel.scrollHeight + "px";
		    } 
		  });
		}
		
//		alert('넘어온 x의값'+x.list)
//		console.log(x.list)
//		$.each(x.list, (i, j) => {
//			var tr = $(`<tr></tr>`).appendTo("#tbody");
//			$(`<td></td>`).text(j.seq).appendTo(tr);
//			$(`<td><a href="#">${j.title}</a></td>`).appendTo(tr)
//			.click(e=>{
//				e.preventDefault()
//				alert('seq 확인'+ j.seq)
//										
//			});
//			$(`<td></td>`).text(j.writer).appendTo(tr);
//
//		})
	}
	
	let write =x=>  {
		
			
		$('#btn_brd').click((e) => {
			e.preventDefault()
			alert('게시판 글쓰기 버튼 클릭')
			
			$('#body_main').empty()
			$('#body_main').html(brd_vue.write_form({type:x}))		
				
			$('#btn_write_submit').click(e => {
				e.preventDefault()
				alert('글 작성 페이지 글쓰기 버튼 클릭')
				$.ajax({
					url: _ + '/boards/',
					type: 'POST',
					data: JSON.stringify({
						title: $('#write_form input[name="title"]').val(),
						ctype: $('#write_form input[name="ctype"]').val(),
						writer: $('#write_form input[name="writer"]').val(),
						content: $('#write_form textarea[name="content"]').val()
						}),
					dataType: 'json',
					contentType: 'application/json',
					success: d => {
						alert('글쓰기 성공'+type+" 으로 이동")
						 list({ ctype: type, pageSize: 5, nowPage: 0 })
						// list({pageSize: 5, nowPage: 0, option:$('#selectOption').val(), search: $('#search').val()})

					},
					error: e => {
						alert('AJAX 실패')
					}
				})
			})			
			
			$(`<div id="myModal" class="modal">

							  <!-- Modal content -->
							  <div class="modal-content">
							    <span class="close">&times;</span>
							    <form>
							    <input id="fileUpload" type="file"/>
							    <button id="btn_fileCheck">확인</button>
							    <button id="btn_fileCancel">취소</button>
							    </form>
							  </div>
							
							</div>`).appendTo('#body_main')	
			
			$('#add_file').click(e=>{
				e.preventDefault()
				alert('>>>> ')
				const modal = document.getElementById("myModal");
				modal.style.display = "block";
				
				const span = document.getElementsByClassName("close")[0];
				span.onclick = function() {
					  modal.style.display = "none";
					}
				
				window.onclick = function(event) {
					  if (event.target == modal) {
					    modal.style.display = "none";
					  }
					}			
				
			})
			$('#btn_fileCheck').click(e=>{
				e.preventDefault()
				alert('확인')
				let formData = new FormData()
				let files = $('#fileUpload')[0].files

				let i = 0
				for(; i< files.length; i++){
					formData.append("uploadFile", files[i])
				}
				
				$.ajax({
					url : _+'/boards/fileupload',
					processData : false,
					contentType : false,
					data : formData,
					type : 'POST',
					success : d => {
						alert("파일업로드 성공")
						
					},
					error : e => {
						alert('파일 업로드 실패')
					}
				})
				
				
			})
			
			$('#btn_cancel').click(e=>{
				e.preventDefault()
				alert('취소버튼 클릭')
			})
			
		})
		
	}

	
	let content =(x)=>{
		
		$('#body_main').empty()
		$('#body_main').html(brd_vue.content_form())
		
						console.log(x.read)
						$('#content_form input[name="title"]').val(x.read.title)
						$('#content_form input[name="writer"]').val(x.read.writer)
						$('#content_form textarea[name="content"]').val(x.read.content)
		
		
		$('#btn_updateForm').click(e=>{
			e.preventDefault()
			alert('수정 클릭')
			update(x)
		})
		
		$('#btn_backList1').click(()=>{
			alert('리스트 클릭')
		})
	
	}
	
	let update =(x)=>{
		$('#body_main').empty()
		$('#body_main').html(brd_vue.update_form())
		alert('seq 넘어옴' + x.read.seq)
				
		$('#update_form input[name="title"]').val(x.read.title)
		$('#update_form input[name="writer"]').val(x.read.writer)
		$('#update_form textarea[name="content"]').val(x.read.content)
		
		$('#btn_updateWrite').click(e=> {
			alert('수정 버튼 클릭' + x.read.title +',' + x.read.content)
			e.preventDefault()
				$.ajax({
					url: _ + '/boards/update',
					type: 'PUT',
					data: JSON.stringify({
						seq : x.read.seq,
						title: $('#update_form input[name="title"]').val(),
						content: $('#update_form textarea[name="content"]').val()

					}),
					dataType: 'json',
					contentType: 'application/json',
					success: d => {
						alert('AJAX 성공')
						 list({ ctype: type, pageSize: 5, nowPage: 0 })
						// list({pageSize: 5, nowPage: 0, option:$('#selectOption').val(), search: $('#search').val()})
					},
					error: e => {
						alert('AJAX 실패')
					}
				})
		
		})
		
		
		deleteBoard(x)
		
	}
	
	let deleteBoard = function(x){
		$('#btn_deleteWrite').click((e)=>{
			e.preventDefault()
			alert('삭제버튼 클릭 seq 값 넘어옴 :' + x.read.seq)
			$.getJSON(_ + '/boards/delete/'+ x.read.seq, d =>{
			alert('getJSON 성공' +d)})
			list({ ctype: type, pageSize: 5, nowPage: 0 })
			//list({pageSize: 5, nowPage: 0, option:$('#selectOption').val(), search: $('#search').val()})
		})
		
	}

	
	
	

	return { onCreate, write, toggleList }
})();