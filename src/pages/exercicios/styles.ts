import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 100px 50px 0px 50px;
`;

export const LinkVoltar = styled(Link)`
  background-color: #00358e;
  color: white;
  width: 14.438rem;
  height: 3.75rem;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const QuizContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 70px;
  border-radius: 50px;
  width: 50%;
  height: 50%;
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FinishContainer = styled.div`
  display: none;
  flex-direction: column;
  gap: 10px;

  &.show {
    display: flex;
  }
`;

export const Button = styled.button`
  width: 100%;
  text-align: start;
  padding: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #008ccc;
  color: white;
`;