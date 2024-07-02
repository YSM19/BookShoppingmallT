import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const BoardWrite = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const board = { id, title, content };

    axios.post('/api/board/list', board)
      .then(response => {
        if (response.status === 200) {
          console.log('글 작성 성공');
          console.log('새로 생성된 게시물 id', response.data.id);

          setId(`id=${response.data.id}`);

          // 글 작성 후 리디렉션 등 필요한 작업 수행
          navigate('/board/list');
        } else {
          console.error('글 작성 실패');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="layout">
      <form onSubmit={handleSubmit}>
        <input
          id={id}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
        />
        <textarea
          id={id}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용"
        ></textarea>
        <button
            type="submit"
        >작성</button>
      </form>
    </div>
  );
};

export default BoardWrite;
