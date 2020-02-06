package com.goodfor.web.board;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.goodfor.web.proxy.Inventory;
import com.goodfor.web.proxy.PageProxy;
import com.goodfor.web.proxy.Proxy;
import com.goodfor.web.proxy.CrawlingProxy;
import com.goodfor.web.proxy.FileProxy;

@RestController
@RequestMapping("/boards")
public class BoardCtrl extends Proxy {
	@Autowired
	BoardServiceImpl service;
	@Autowired
	Map<String, Object> map;
	@Autowired
	CrawlingProxy crawler;
	@Autowired
	PageProxy pager;
	@Autowired FileProxy filemgr;
	@Autowired Board board;

	@PostMapping("/")
	public Map<?, ?> write(@RequestBody Board param) {
		System.out.println("글쓰기 param값 넘어옴 :" + param);
		service.insertBoardWrite(param);

		map.clear();
		map.put("msg", "WHITE SUCCESS");

		return map;
	}
	
	@GetMapping("/list/{ctype}/{pageSize}/{nowPage}/{option}/{search}")
	public Map<?, ?> listPage(@PathVariable("pageSize") String pageSize, @PathVariable("nowPage") String nowPage,
			 @PathVariable("option") String option, @PathVariable("search") String search, @PathVariable("ctype") String ctype) {
		
		System.out.println("페이지 사이즈 넘어옴" + pageSize);
		System.out.println("나우 페이지 넘어옴" + nowPage);
		System.out.println("옵션 넘어옴" + option);
		System.out.println("서치 넘어옴" + search);
		System.out.println("타입 넘어옴" + ctype);
		System.out.println("Board 총 카운트는? :" + service.boardAllCount(ctype));
		
		board.setCtype(ctype);
		pager.setCtype(ctype);
		pager.setRowCount(service.boardAllCount(ctype));
		pager.setPageSize(Integer.parseInt(pageSize));
		pager.setBlockSize(5);
		pager.setNowPage(integer(nowPage));
		pager.setOption(option);
		pager.setSearch(search);
		pager.paging();
		System.out.println("pager값들 : " + pager.toString());
		

//		List<Board> list = service.selectAllBoardCustomer(pager);
		
//		if(ctype ==1) {
//			List<Board> list = service.selectAllBoardCustomer(pager);
//		} else if(ctype==2) {
//			List<Board> list = service.selectAllBoardNotice(pager);
//		} else {
//			List<Board> list = service.selectAllBoardFAQ(pager);
//		}
		
		
		List<?> list = null;
		switch(pager.getCtype()) {
		case "1" : 
			list = service.selectAllBoardFAQ(pager);
			System.out.println("case1 list 값" + list);
			break;
			
		case "3" : 
			list = service.selectAllBoardCustomer(pager);
			
			break;
			
		case "4" : 
			list = service.selectAllBoardNotice(pager);
			
			break;					
		
		}		
					
		System.out.println("최종적으로 list 담긴값" + list);
		map.clear();
		map.put("list", list);
		map.put("listSize", list.size());
		map.put("pager", pager);
		return map;
	}

	@GetMapping("/contentView/{bno}")
	public Map<?, ?> detailView(@PathVariable String bno) {
		System.out.println("int param값 넘어옴 :" + bno);
		map.clear();
		map.put("read", service.readBoard(Integer.parseInt(bno)));
		return map;
	}

	@PutMapping("/update")
	public Map<?, ?> update(@RequestBody Board param) {
		System.out.println("update param값 넘어옴 :" + param);
		service.updateBoard(param);
		map.clear();
		map.put("msg", "UPDATE SUCCESS");
		return map;
	}

	@GetMapping("/delete/{bno}")
	public Map<?, ?> delete(@PathVariable String bno) {
		System.out.println("DELETE bno값 넘어옴 :" + bno);
		service.deleteBoard(Integer.parseInt(bno));
		map.clear();
		map.put("msg", "DELETE SUCCESS");

		return map;
	}
		
	@PostMapping("/fileupload")
	public void fileupload(MultipartFile[] uploadFile) {
		System.out.println("uploadFile 넘어옴" + uploadFile);
		filemgr.fileupload(uploadFile);
	}

}
