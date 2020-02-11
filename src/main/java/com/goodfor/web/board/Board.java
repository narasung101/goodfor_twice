package com.goodfor.web.board;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@AllArgsConstructor
@NoArgsConstructor
@Component
public class Board {
	private int seq, viewcnt;
	private String writer, ctype, title, content, attfile;
	private SimpleDateFormat credate, modidate;
	
	
}
