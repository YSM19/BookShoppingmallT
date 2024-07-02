import React, { useEffect, useState } from 'react';
import './BoardList.css';
import axios from "axios";

function BoardList( {onBoardCreated }) {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    try {
      const response = await axios.get('/api/board/list');
      if (Array.isArray(response.data)) {
        setBoards(response.data);
      } else {
        console.error('Response data is not an array:', response.data);
      }
    } catch (error) {
      console.error('Error fetching boards:', error);
    }
  };

  useEffect(() => {
    if (onBoardCreated) {
      fetchBoards();
    }
  }, [onBoardCreated, fetchBoards()]);

  return (
    <div className="layout">
      <a href="/board/write">글 작성</a>
      {Array.isArray(boards) && boards.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>글 번호</th>
              <th>글 제목</th>
            </tr>
          </thead>
          <tbody>
            {boards.map(board => (
              <tr key={board.id}>
                <td>{board.id}</td>
                <td>{board.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>게시물이 없습니다.</div>
      )}
    </div>
  );
}

export default BoardList;