import styled from "styled-components";

export const SubTitleBar = styled.div`
  margin: 0.5rem 0;
  display: flex;
`;

export const AddSubTitle = styled.div`
  display: inline;
  padding: 7px 10px;
  border-radius: 0 10px 0 0;
  margin-left: 2px;
  cursor: pointer;
  background-color: #fcd5ce;
  &:hover,
  &:active {
    background: #f7c8bb;
  }
`;

export const SubTitle = styled.input`
  text-align: center;
  padding: 7px 2px;
  border-radius: 0 10px 0 0;
  margin-left: 2px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: #fcd5ce;

  &:hover,
  &:active {
    background: #f7c8bb;
  }
`;
