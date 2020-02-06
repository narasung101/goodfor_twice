"use strict";
var brd_vue = brd_vue || {}
brd_vue = {
		brd_head:x=>{
			return `
			<link rel="stylesheet" href="${x.css}/brd.css">
			`
		},
		brd_mainbody : x=>{
			return `
			
			
			<body>
			
			
				  <style type="text/css">
				      .jumbotron{
				        background-image:url('https://blogifs-endpoint.azureedge.net/wp-content/uploads/2018/10/RANVP620974266Easyturn-min-1116x600.jpg');
				        background-size: cover;
				        text-shadow: black 0.4em 0.4em 0.4em;
				        color:white;
				        height: 328px;
				      } 		  				
				    				    
				      </style>
				      
				  <!-- Navigation -->
				  
				
				  <!-- Page Content -->
				  <div class="container" style="margin-top: 24px;">
				
				    <!-- Jumbotron Header -->
				    <div class="jumbotron">
				      <h1 class="display-3">굿포</h1>
				      <p class="lead">고객 감동과 만족을 위해 노력하는 굿포 고객센터입니다.</p>
				     <!-- 점보트론 바로가기 버튼 삭제 <a href="#" class="btn btn-primary btn-lg">바로가기!</a> -->
				    </div>
				
				    <!-- Page Features -->
				    
				  			
				
    
	<div class="row text-center">
					
				      <div class="col-lg-3 col-md-6 mb-4">
				        <div class="card h-100">
				          <img class="card-img-top" src="https://image.flaticon.com/icons/svg/1660/1660114.svg" alt="" class="img-fluid">
				          <div class="card-body">
				            <h4 class="card-title">자주하는질문</h4>
<!-- 체크박스 하는것 보류 해제 
				            <input name="faq" type="checkbox" value="1" />자주하는질문 
				            
  -->
				            <p class="card-text"></p>
				          </div>
				          <div class="card-footer">
				            <a href="#" id="btn_faqView" class="btn btn-primary">바로가기</a>
				          </div>
				        </div>
				      </div>
				
				      <div class="col-lg-3 col-md-6 mb-4">
				        <div class="card h-100">
				        <img class="card-img-top" src="https://image.flaticon.com/icons/svg/561/561127.svg" alt="">
				           <div class="card-body">
				            <h4 class="card-title">문의/제안</h4>
				            
				            <p class="card-text"></p>
				          </div>
				          <div class="card-footer">
				            <a href="#" id="btn_inquiryView" class="btn btn-primary">바로가기</a>
				          </div>
				        </div>
				      </div>
				
				      <div class="col-lg-3 col-md-6 mb-4">
				        <div class="card h-100">
				          <img class="card-img-top" src="https://image.flaticon.com/icons/svg/1069/1069159.svg" alt="">
				          <div class="card-body">
				            <h4 class="card-title">고객게시판</h4>
				            
				            <p class="card-text"></p>
				          </div>
				          <div class="card-footer">
				            <a href="#" id="btn_customerView" class="btn btn-primary">바로가기</a>
				          </div>
				        </div>
				      </div>
				      
				       <div class="col-lg-3 col-md-6 mb-4">
				        <div class="card h-100">
				          <img class="card-img-top" src="https://image.flaticon.com/icons/svg/482/482598.svg" alt="">
				          <div class="card-body">
				            <h4 class="card-title">공지사항</h4>
				            
				            <p class="card-text"></p>
				          </div>
				          <div class="card-footer">
				            <a href="#" id="btn_noticeView" class="btn btn-primary">바로가기</a>
				          </div>
				        </div>
				      </div>   		      
				      
				
				    </div>
				    

			
				    <!-- /.row -->
				
				  </div>
				  <!-- /.container -->
				
				  <!-- Footer -->
				  
				
				  <!-- Bootstrap core JavaScript -->
				  
			</body>
			
			`
		} ,
		
		write: (x)=> {
			return `<div class="container-fluid" style="width:80%">
			<h1>글 작성</h1>
			<form id="write_form">
			<div>
			<input type="text" name="title" style="margin-top:10px" class="form-control" placeholder="제목" />
			</div>
			<div>
			<input type="text" name="writer" style="margin-top:10px" class="form-control" placeholder="작성자 ID" />
			</div>
			<div>
			<input id="type" type="hidden" name="ctype" value="${x.type}" style="margin-top:10px" class="form-control" placeholder="작성자 ID" />
			</div>
			<div class="row">
			<div style="width:97%; margin:10px auto" >
			<textarea name="content" class="form-control" rows="10"></textarea>
			 </div>
			 </div>
			
			<input id="btn_write" type="submit" class="btn btn-primary"  value="글쓰기"/>
			<input id="btn_cancel" type="reset" class="btn btn-danger" value="취소"/>
			<input id="add_file" type="button" class="btn btn-primary"  value="파일첨부"/>
			
			</div>
			</form>
			</div>`
		},
		
		content: function () {
			return `<div class="container-fluid" style="width:80%">
			<h1>글 내용</h1>
			<form id="content_form">
			<div>
			제목 : <input type="text" name="title" style="margin-top:10px" class="form-control" placeholder="제목" readonly="readonly" />
			</div>
			<div>
			작성자 : <input type="text" name="writer" style="margin-top:10px" class="form-control" placeholder="작성자 ID" readonly="readonly" />
			</div>
			<div class="row">
			<div style="width:97%; margin:10px auto" >
			글 내용 : <textarea name="content" class="form-control" rows="10" readonly="readonly"></textarea>
			 </div>
			 </div>
		        <button id="btn_updateForm">수정</button> 
				<button id="btn_backList1">목록</button> 
			</div>
			</form>
			</div>`
		},
		
		update: (x)=> {
			return `<div class="container-fluid" style="width:80%">
			<h1>글 수정</h1>
			<form id="update_form">
			<div>
			<input  type="text" name="title" style="margin-top:10px" class="form-control" placeholder="제목" />
			</div>
			<div>
			<input  type="text" name="writer" style="margin-top:10px" class="form-control" placeholder="작성자 ID" readonly="readonly" />
			</div>
			<div class="row">
			<div style="width:97%; margin:10px auto" >
			<textarea name="content" class="form-control" rows="10"></textarea>
			 </div>
			 </div>
	         <div>
	          <input type="file" id="btn_fileUpload" value="파일 업로드"/> 
	         </div>
	         <button id="btn_updateWrite">등록 완료</button> 
	         <button id="btn_deleteWrite">삭제</button>
			 <button id="btn_backList2">목록</button> 
					
			</div>
			</form>
			</div>`
		}
}