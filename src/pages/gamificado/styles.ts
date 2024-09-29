/* styles.ts */
import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

export const button = styled.p `
   display: flex;
   align-items: center;
   justify-content: center;
   width: 380px;
   height: 85px;
   border-radius: 50px;
   font-size: 50px;
   color: white;
   background-color: #34C5E4;
   border: none;
   `
export const CustomerImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const ChatBox = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  margin: 0 auto;
`;

export const ResponseButton = styled.button`
  display: block;
  margin: 10px auto;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #00358E;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #45a049;
  }
`;

export const SatisfactionBar = styled.div`
  width: 100%;
  background-color: #ddd;
  height: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  position: relative;
  display: flex;

  div {
    height: 100%;
    background-color: #4caf50;
    border-radius: 10px 0 0 10px;
  }

  span {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 0;
    font-size: 14px;
    color: #333;
  }
`;
