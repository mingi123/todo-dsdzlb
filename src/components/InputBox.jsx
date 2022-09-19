import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const InputBox = ({ todoList, setTodoList }) => {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  // input 값 가져오기
  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onClickAddButton = () => {

    // todoItemList에 값 추가
    const nextTodoList = todoList.concat({
      id: todoList.length,
      text,
    });
    setTodoList(nextTodoList);

    // input 값 초기화 및 포커싱
    setText('');
    inputRef.current.focus();
  };

  useEffect(() => {  // todoList가 변했을때만 실행
    console.log(todoList);
  }, [todoList]);

  return (
    <div className="todoapp__inputbox">

      {/* 아이템 내용 입력 input */}
      <input
        type="text"
        name="todoItem"
        value={text}
        ref={inputRef}
        placeholder="할 일을 입력해주세요"
        className="todoapp__inputbox-inp"
        onChange={onChangeInput}
      />

      {/* 입력 후 아이템 추가 버튼 */}
      <button
        type="submit"
        className="todoapp__inputbox-add-btn"
        onClick={onClickAddButton}
      >
        추가
      </button>
    </div>
  );
};
// props 값 검증
InputBox.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ),
  setTodoList: PropTypes.func.isRequired,
};

export default InputBox;