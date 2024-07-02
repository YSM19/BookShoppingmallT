import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BoardService from '../service/BoardService';

function BoardListComponent() {
    const [boards, setBoards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        BoardService.getBoards().then((res) => {
            if (Array.isArray(res.data)) {
                setBoards(res.data);
            } else {
                console.error('Received data is not an array:', res.data);
                setBoards([]);
            }
        })
            .catch((error) => {
                console.error('Error fetching boards:', error);
                setBoards([]);
            });
    }, []);

    const createBoard = () => {
        navigate('/board/create');
    };

    return (
        <div>
            <h2 className="text-center">Boards List</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={createBoard}>글 작성</button>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>글 번호</th>
                            <th>타이틀</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            <th>갱신일</th>
                            <th>좋아요수</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {boards.map(board => (
                            <tr key={board.no}>
                                <td>{board.no}</td>
                                <td>{board.title}</td>
                                <td>{board.memberNo}</td>
                                <td>{board.createdTime}</td>
                                <td>{board.updatedTime}</td>
                                <td>{board.likes}</td>
                                <td>{board.counts}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BoardListComponent;