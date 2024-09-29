/* styles.ts */
import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

export const TaskProgress = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`;

export const TaskDescription = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
`;

export const OfficeImage = styled.img`
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
`;

export const ObjectButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const DragArea = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f0f0f0;
  border: 2px dashed #ccc;
  margin: 20px auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
