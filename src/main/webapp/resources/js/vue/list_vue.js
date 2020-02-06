"use strict";
var list_vue = list_vue || {}
list_vue = {
		custMain : ()=>{
			return `
			
<div class="boardListArea">
                
				<div class="boardSearch">
					<p class="case">전체 <strong>47,626</strong>건</p>
					<div class="selectArea">
                        <input id="ContentPlaceHolder1_cb_isPrivate" type="checkbox" name="ctl00$ContentPlaceHolder1$cb_isPrivate" checked="checked"><label for="ContentPlaceHolder1_cb_isPrivate">개인글 제외</label>
						<select name="ctl00$ContentPlaceHolder1$ddl_category" id="ContentPlaceHolder1_ddl_category" title="검색조건 선택">
	<option selected="selected" value="37">-- 전체 --</option>
	<option value="52">계좌</option>
	<option value="62">입출금</option>
	<option value="69">잔고</option>
	<option value="100">차트</option>
	<option value="101">시세</option>
	<option value="102">유무상증자</option>
	<option value="103">배당</option>
	<option value="104">조건검색</option>
	<option value="105">제안</option>
	<option value="106">펀드&amp;ELS</option>
	<option value="107">시스템접속</option>
	<option value="108">해외주식</option>
	<option value="109">원클릭</option>
	<option value="110">스톡아이</option>
	<option value="112">홈페이지</option>
	<option value="113">모바일</option>
	<option value="116">로그인및 가입문의</option>
	<option value="139">해외선물</option>
	<option value="206">퇴직연금</option>

</select>
						<span>
                            <input name="ctl00$ContentPlaceHolder1$tb_search" type="text" id="ContentPlaceHolder1_tb_search" title="검색어 입력" onkeypress="if (event.keyCode == 13) { __doPostBack('ctl00$ContentPlaceHolder1$btn_search',''); return false; }">
					        <a id="ContentPlaceHolder1_btn_search" href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$btn_search','')"><img src="/DW/images/btn/btn_lookup.gif" alt="검색"></a>
						</span>
					</div>
				</div>
				<table class="tableDefault tableCol tableList" summary="고객문의 전체의 번호, 제목, 첨부파일, 작성자, 작성일 조회에 대한 정보입니다.">
					<caption>고객문의 전체 목록</caption>
					<colgroup>
						<col width="9%">
						<col>
						<col id="ContentPlaceHolder1_pn_attach0" width="8%">
						<col width="10%">
						<col width="12%">
						<col width="8%">
					</colgroup>
					<thead>
						<tr>
							<th scope="col" class="first">번호</th>
							<th scope="col">제목</th>
							<th id="ContentPlaceHolder1_pn_attach" scope="col">첨부파일</th>

							<th scope="col">작성자</th>
							<th scope="col">작성일</th>
							<th scope="col">조회</th>
						</tr>
					</thead>
					<tbody>

						<tr id="ContentPlaceHolder1_rpt_list_tr_list_0">
	<td id="ContentPlaceHolder1_rpt_list_td_seq_0">
								<div class="tdArea">47626</div>
							</td>
	<td id="ContentPlaceHolder1_rpt_list_td_title_0" class="subject">
								<div class="tdArea">
                                    
                                    <img id="ContentPlaceHolder1_rpt_list_img_manyQuestion_0" src="/E5/MBoard/PType_Basic/Basic_004/images/icon_faq.png" alt="자주질문">
                                    
									<img src="/E5/MBoard/PType_Basic/Basic_004/images/icon_notice.png"> <a href="./DW_Basic_Read.aspx?boardseq=37&amp;seq=145961&amp;page=1&amp;searchString=&amp;isp=1">★본 게시판에서는 계좌정보와 관련한 상담은 불가능합니다.★</a>
								</div>
							</td>
	<td id="ContentPlaceHolder1_rpt_list_pn_attach_0">
								<div class="tdArea">
									
								</div>
							</td>
	<td>
								<div class="tdArea">운**</div>
							</td>
	<td>
								<div class="tdArea">2019/12/13</div>
							</td>
	<td>
								<div class="tdArea">67</div>
							</td>
</tr>


						<tr id="ContentPlaceHolder1_rpt_list_tr_list_1">
	<td id="ContentPlaceHolder1_rpt_list_td_seq_1">
								<div class="tdArea">47625</div>
							</td>
	<td id="ContentPlaceHolder1_rpt_list_td_title_1" class="subject">
								<div class="tdArea">
                                    
                                    <img id="ContentPlaceHolder1_rpt_list_img_manyQuestion_1" src="/E5/MBoard/PType_Basic/Basic_004/images/icon_faq.png" alt="자주질문">
                                    
									<img src="/E5/MBoard/PType_Basic/Basic_004/images/icon_notice.png"> <a href="./DW_Basic_Read.aspx?boardseq=37&amp;seq=78115&amp;page=1&amp;searchString=&amp;isp=1">◆ 이체출금이 되지 않을 경우 참고하세요 ◆</a>
								</div>
							</td>
	<td id="ContentPlaceHolder1_rpt_list_pn_attach_1">
								<div class="tdArea">
									
								</div>
							</td>
	<td>
								<div class="tdArea">운**</div>
							</td>
	<td>
								<div class="tdArea">2016/05/27</div>
							</td>
	<td>
								<div class="tdArea">3838</div>
							</td>
</tr>


						<tr id="ContentPlaceHolder1_rpt_list_tr_list_2">
	<td id="ContentPlaceHolder1_rpt_list_td_seq_2">
								<div class="tdArea">47624</div>
							</td>
	<td id="ContentPlaceHolder1_rpt_list_td_title_2" class="subject">
								<div class="tdArea">
                                    <img id="ContentPlaceHolder1_rpt_list_img_key_2" src="/E5/MBoard/PType_Basic/Basic_004/images/icon_graylock.png" alt="회색열쇠">
                                    
                                    
									<a href="#none" onclick="alert(&quot;비공개 게시글입니다.&quot;);">사이보스 알리미</a>
								</div>
							</td>
	<td id="ContentPlaceHolder1_rpt_list_pn_attach_2">
								<div class="tdArea">
									
								</div>
							</td>
	<td>
								<div class="tdArea">정**</div>
							</td>
	<td>
								<div class="tdArea">2020/01/28</div>
							</td>
	<td>
								<div class="tdArea">0</div>
							</td>
</tr>


						<tr id="ContentPlaceHolder1_rpt_list_tr_list_3">
	<td id="ContentPlaceHolder1_rpt_list_td_seq_3">
								<div class="tdArea">47623</div>
							</td>
	<td id="ContentPlaceHolder1_rpt_list_td_title_3" class="subject">
								<div class="tdArea">
                                    <img id="ContentPlaceHolder1_rpt_list_img_key_3" src="/E5/MBoard/PType_Basic/Basic_004/images/icon_graylock.png" alt="회색열쇠">
                                    
                                    
									<a href="#none" onclick="alert(&quot;작성자 외에는 조회할 수 없습니다.&quot;);">CYBOS5 HTS 실행 문의</a>
								</div>
							</td>
	<td id="ContentPlaceHolder1_rpt_list_pn_attach_3">
								<div class="tdArea">
									
								</div>
							</td>
	<td>
								<div class="tdArea">허**</div>
							</td>
	<td>
								<div class="tdArea">2020/01/28</div>
							</td>
	<td>
								<div class="tdArea">1</div>
							</td>
</tr>


						<tr id="ContentPlaceHolder1_rpt_list_tr_list_4">
	<td id="ContentPlaceHolder1_rpt_list_td_seq_4">
								<div class="tdArea">47622</div>
							</td>
	<td id="ContentPlaceHolder1_rpt_list_td_title_4" class="subject">
								<div class="tdArea">
                                    <img id="ContentPlaceHolder1_rpt_list_img_key_4" src="/E5/MBoard/PType_Basic/Basic_004/images/icon_graylock.png" alt="회색열쇠">
                                    
                                    
									<a href="#none" onclick="alert(&quot;비공개 게시글입니다.&quot;);">sybos 5 실행안됨</a>
								</div>
							</td>
	<td id="ContentPlaceHolder1_rpt_list_pn_attach_4">
								<div class="tdArea">
									<a id="ContentPlaceHolder1_rpt_list_hy_attach_4" title="해당파일다운로드"><img src="/DW/images/btn/btn_file2.gif" alt="첨부파일"></a>
								</div>
							</td>
	<td>
								<div class="tdArea">남**</div>
							</td>
	<td>
								<div class="tdArea">2020/01/28</div>
							</td>
	<td>
								<div class="tdArea">1</div>
							</td>
</tr>


						<tr id="ContentPlaceHolder1_rpt_list_tr_list_5">
	<td id="ContentPlaceHolder1_rpt_list_td_seq_5">
								<div class="tdArea">47621</div>
							</td>
	<td id="ContentPlaceHolder1_rpt_list_td_title_5" class="subject">
								<div class="tdArea">
                                    <img id="ContentPlaceHolder1_rpt_list_img_key_5" src="/E5/MBoard/PType_Basic/Basic_004/images/icon_graylock.png" alt="회색열쇠">
                                    
                                    
									<a href="#none" onclick="alert(&quot;작성자 외에는 조회할 수 없습니다.&quot;);">해외주식 양도소득세 관련</a>
								</div>
							</td>
	<td id="ContentPlaceHolder1_rpt_list_pn_attach_5">
								<div class="tdArea">
									
								</div>
							</td>
	<td>
								<div class="tdArea">이**</div>
							</td>
	<td>
								<div class="tdArea">2020/01/28</div>
							</td>
	<td>
								<div class="tdArea">0</div>
							</td>
</tr>


						<tr id="ContentPlaceHolder1_rpt_list_tr_list_6">
	<td id="ContentPlaceHolder1_rpt_list_td_seq_6">
								<div class="tdArea">47620</div>
							</td>
	<td id="ContentPlaceHolder1_rpt_list_td_title_6" class="subject">
								<div class="tdArea">
                                    <img id="ContentPlaceHolder1_rpt_list_img_key_6" src="/E5/MBoard/PType_Basic/Basic_004/images/icon_graylock.png" alt="회색열쇠">
                                    
                                    
									<a href="#none" onclick="alert(&quot;비공개 게시글입니다.&quot;);">스마트폰에서 증권하기</a>
								</div>
							</td>
	<td id="ContentPlaceHolder1_rpt_list_pn_attach_6">
								<div class="tdArea">
									
								</div>
							</td>
	<td>
								<div class="tdArea">안**</div>
							</td>
	<td>
								<div class="tdArea">2020/01/27</div>
							</td>
	<td>
								<div class="tdArea">0</div>
							</td>
</tr>


						<tr id="ContentPlaceHolder1_rpt_list_tr_list_7">
	<td id="ContentPlaceHolder1_rpt_list_td_seq_7">
								<div class="tdArea">47619</div>
							</td>
	<td id="ContentPlaceHolder1_rpt_list_td_title_7" class="subject">
								<div class="tdArea">
                                    <img id="ContentPlaceHolder1_rpt_list_img_key_7" src="/E5/MBoard/PType_Basic/Basic_004/images/icon_graylock.png" alt="회색열쇠">
                                    
                                    
									<a href="#none" onclick="alert(&quot;작성자 외에는 조회할 수 없습니다.&quot;);">계좌삭제</a>
								</div>
							</td>
	<td id="ContentPlaceHolder1_rpt_list_pn_attach_7">
								<div class="tdArea">
									
								</div>
							</td>
	<td>
								<div class="tdArea">이**</div>
							</td>
	<td>
								<div class="tdArea">2020/01/27</div>
							</td>
	<td>
								<div class="tdArea">1</div>
							</td>
</tr>


						<tr id="ContentPlaceHolder1_rpt_list_tr_list_8">
	<td id="ContentPlaceHolder1_rpt_list_td_seq_8">
								<div class="tdArea">47618</div>
							</td>
	<td id="ContentPlaceHolder1_rpt_list_td_title_8" class="subject">
								<div class="tdArea">
                                    <img id="ContentPlaceHolder1_rpt_list_img_key_8" src="/E5/MBoard/PType_Basic/Basic_004/images/icon_graylock.png" alt="회색열쇠">
                                    
                                    
									<a href="#none" onclick="alert(&quot;작성자 외에는 조회할 수 없습니다.&quot;);">보유종목 매도시 예상 수익율 보는법</a>
								</div>
							</td>
	<td id="ContentPlaceHolder1_rpt_list_pn_attach_8">
								<div class="tdArea">
									
								</div>
							</td>
	<td>
								<div class="tdArea">최**</div>
							</td>
	<td>
								<div class="tdArea">2020/01/27</div>
							</td>
	<td>
								<div class="tdArea">5</div>
							</td>
</tr>


						<tr id="ContentPlaceHolder1_rpt_list_tr_list_9">
	<td id="ContentPlaceHolder1_rpt_list_td_seq_9">
								<div class="tdArea">47617</div>
							</td>
	<td id="ContentPlaceHolder1_rpt_list_td_title_9" class="subject">
								<div class="tdArea">
                                    <img id="ContentPlaceHolder1_rpt_list_img_key_9" src="/E5/MBoard/PType_Basic/Basic_004/images/icon_graylock.png" alt="회색열쇠">
                                    
                                    
									<a href="#none" onclick="alert(&quot;비공개 게시글입니다.&quot;);">7400 통합차트 화면 기능 문의합니다.</a>
								</div>
							</td>
	<td id="ContentPlaceHolder1_rpt_list_pn_attach_9">
								<div class="tdArea">
									
								</div>
							</td>
	<td>
								<div class="tdArea">정**</div>
							</td>
	<td>
								<div class="tdArea">2020/01/27</div>
							</td>
	<td>
								<div class="tdArea">1</div>
							</td>
</tr>


					</tbody>
				</table>
			</div>
			`
		}
		
}
