import React from "react";
import TodoTemplate from "../Components/TodoTemplate";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";
import {
  Date,
  DateText,
  TemplateBox,
  Title,
} from "../Styled/todo/common-styled";
import MyCalendar from "./MyCalendar";
import { useSelector } from "react-redux";
import List from "../Components/List";
import {SubTitle} from "../Styled/myPage/main-styled";

const useMyTodo = (todoTitleId) => {
  const userId = useSelector((state) => state.loginReducer.loginUser);
  const todos = useSelector((state) => state.todoReducer.todos);

  const newTodo = todos.filter(
    (todo) => todo.titleId === todoTitleId && todo.writer === userId
  );

  return newTodo;
};

const MyTodo = ({ match }) => {
  const titleId = match.params.id;
  const myTodoTitleList = useSelector(
    (state) => state.todoTitleReducer.todoTitles
  );
  const myTodoList = useMyTodo(titleId);
  const DoingList = myTodoList.filter((todo) => !todo.isCompleted);
  const DoneList = myTodoList.filter((todo) => todo.isCompleted);
  localStorage.setItem("myTodoTitles", JSON.stringify(myTodoTitleList));
  localStorage.setItem("myTodos", JSON.stringify(myTodoList));

  return (
    <div>
      <Title>ToDo</Title>

      <Date> Today </Date>
      <DateText>
        <MyCalendar />
      </DateText>

      <TemplateBox>
        <TodoTemplate>
          <SubTitle>Todo</SubTitle>
          <TodoInput todoTitleId={titleId} />
          <TodoList todoList={myTodoList} todoTitleId={titleId} />
        </TodoTemplate>


        <TodoTemplate>
          <SubTitle>Doing</SubTitle>
          <List todoList={DoingList} todoTitleId={titleId} isCompleted={false} />
        </TodoTemplate>

        <TodoTemplate>
          <SubTitle>Done</SubTitle>
          <List todoList={DoneList} todoTitleId={titleId} isCompleted={true} />
        </TodoTemplate>
      </TemplateBox>
    </div>
  );
};

export default MyTodo;
