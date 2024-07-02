package com.web.bookshoppingmallt.Controller;

import com.web.bookshoppingmallt.entity.Board;
import com.web.bookshoppingmallt.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BoardController {

    @Autowired
    private BoardService boardService;

    // get all board
    @GetMapping("/board")
    public List<Board> getBoards() {
        List<Board> boards = boardService.getBoard();
        System.out.println("Fetched boards: " + boards);  // 로그 추가
        return boards;
    }

    @PostMapping("/board")
    public Board createBoard(@RequestBody Board board) {
        return boardService.createBoard(board);
    }
}


//
//import com.web.bookshoppingmallt.entity.Board;
//import com.web.bookshoppingmallt.service.BoardService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/board")
//public class BoardController {
//
//    @Autowired
//    private BoardService boardService;
//
////    @GetMapping("/write")
////    public String boardWriteForm() {
////        return "boarWrite Form";
////    }
//
//    @PostMapping("/write")
//    public String boardWrite(Board board, Model model, MultipartFile file) {
//        boardService.write(board);
//
////        model.addAttribute("message",)
//
//        return "board list";
//    }
//
//    @GetMapping("/list")
//    public void boardLists(@RequestParam Integer id, @RequestParam String title) {
//        System.out.println(id);
//        System.out.println(title);
//    }
//
//    @PostMapping("/list")
//    public List<Board> boardList() {
//        return boardService.boardList();
//    }
//}
