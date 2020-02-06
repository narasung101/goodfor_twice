package com.goodfor.web.proxy;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Lazy
@Component("pager")
public class PageProxy extends Proxy {
	private int rowCount, startRow, endRow,
				pageCount, pageSize, startPage, endPage, nowPage,
				blockCount, blockSize, prevBlock, nextBlock, nowBlock;
	private boolean existPrev, existNext;
	private String ctype, search, option;

	public void paging() {
		// rowCount, pageSize, blockSize, nowPage
		
		pageCount= (rowCount%pageSize!=0)?(rowCount/pageSize)+1:rowCount/pageSize;
		blockCount = (pageCount%blockSize!=0)?(pageCount/blockSize)+1:pageCount/blockSize;
		startRow = nowPage * pageSize;
		endRow = (nowPage!=pageCount-1)?startRow+(pageSize-1):rowCount-1;
		nowBlock = nowPage/blockSize;
		startPage = nowBlock*blockSize;
		endPage = (nowBlock!=blockCount-1)?startPage+(blockSize-1):pageCount-1;
		prevBlock = startPage-blockSize;
		nextBlock = startPage+blockSize;
		existPrev = nowBlock !=0;
		existNext = (nowBlock+1)!=blockCount;
		
//		pageCount = (rowCount % pageSize != 0) ? rowCount / pageSize + 1 : rowCount / pageSize -1;
//		blockCount = (pageCount % blockSize != 0) ? pageCount / blockSize + 1 : pageCount / blockSize;
//		startRow = nowPage * pageSize;
//		endRow = (nowPage != pageCount) ? startRow + (pageSize - 1) : rowCount;
//		nowBlock = nowPage / blockSize + 1;
//		startPage = (nowBlock-1) * blockSize;
//		endPage = (nowBlock != blockCount) ? startPage + (blockSize - 1) : pageCount;
//		prevBlock = startPage - 1;
//		nextBlock = endPage + 1;
//		existPrev = (nowBlock-1) != 0;
//		existNext = nowBlock != blockCount;

	}

}
