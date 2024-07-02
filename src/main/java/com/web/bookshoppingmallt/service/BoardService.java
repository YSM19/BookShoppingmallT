package com.web.bookshoppingmallt.service;

import com.web.bookshoppingmallt.entity.Board;
import com.web.bookshoppingmallt.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;
//    public void write(Board board) {
//        boardRepository.save(board);
//    }
//

    public List<Board> getBoard() {
        return boardRepository.findAll();
    }

    public Board createBoard(Board board) {
        return boardRepository.save(board);
    }
}
