import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BoardService from '../service/BoardService';

function CreateBoardComponent() {
    const [board, setBoard] = useState({
        type: '',
        title: '',
        contents: '',
        MemberName: '',
        createdTime: '',
        updatedTime: ''
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBoard(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const createBoard = (event) => {
        event.preventDefault();
        const currentTime = new Date().toISOString();
        const newBoard = {
            ...board,
            createdTime: currentTime,
            updatedTime: currentTime
        }

        console.log("board => " + JSON.stringify(newBoard));
        BoardService.createBoard(newBoard).then(res => {
            navigate('/board');
        });
    };

    const cancel = () => {
        navigate('/board');
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">새글을 작성해주세요</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Type </label>
                                    <select name="type" className="form-control"
                                        value={board.type} onChange={handleChange}>
                                        <option value="">선택하세요</option>
                                        <option value="1">자유게시판</option>
                                        <option value="2">질문과 답변</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label> Title </label>
                                    <input type="text" placeholder="title" name="title" className="form-control"
                                        value={board.title} onChange={handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label> Contents  </label>
                                    <textarea placeholder="contents" name="contents" className="form-control"
                                        value={board.contents} onChange={handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label> MemberName  </label>
                                    <input placeholder="MemberName" name="MemberName" className="form-control"
                                        value={board.MemberName} onChange={handleChange}/>
                                </div>
                                <button className="btn btn-success" onClick={createBoard}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateBoardComponent;