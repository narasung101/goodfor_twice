package com.goodfor.web.board;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.goodfor.web.proxy.PageProxy;

@Repository
public interface BoardMapper {
	public int selectBoardAllCount(String ctype);
	public void insertBoardWrite(Board param);
	public List<Board> selectAllBoardCustomer(PageProxy param);
	public List<Board> selectAllBoardNotice(PageProxy param);
	public List<Board> selectAllBoardFAQ(PageProxy param);
	public Board selectBoardRead(int seq);
	public void viewCntIncrease(int seq);
	public void updateBoard(Board param);
	public void deleteBoard(int seq);
//	public List<Board> selectAllBoardByBno(PageProxy param);
//	public List<Board> selectAllBoardByTitle(PageProxy param); 
//	public List<Board> selectAllBoardByWriter(PageProxy param); 
	
	
}
