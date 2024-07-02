package com.web.bookshoppingmallt.repository;

import com.web.bookshoppingmallt.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<Board, Integer> {
//    @Query("SELECT b FROM Board b")
//    List<Board> findAllBoards();
}
