import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Homepage = styled.div `
    width: 100%;
    height: 100vh;
    background-color: #D9D9D9;
`

export const MainContainner = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;

    h1 {
        color: #00358E;
        margin-bottom: 200px;
        font-size: 50px;
        font-weight: 700;
    }
`

export const JourneyStep = styled.div `
    width: 80%;
    margin-bottom: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const LineSteps = styled.img `
    position: absolute;
    text-align: center;
    width: 80%;
`

export const Steps = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 0 75px;
    width: 100%;
    z-index: 1;
`

export const Step = styled(Link) `
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #34C5E4;
    aspect-ratio: 1/1;
    width: 75px;
    font-size: 33px;
    font-weight: 700;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #fff;
    cursor: pointer;
`

export const BoxModule = styled.div`
  opacity: 0;
  z-index: -100;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: -100px;
  margin-top: 40px;
  width: 275px;
  height: max-content;
  padding: 20px 0;
  background: #00358e;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  transition: 0.5s;
  gap: 20px;
  font-size: 20px;
  color: #fff;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 40px solid #00358e;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
  }

  a {
    color: #fff;
    font-size: 30px;
    font-weight: 700;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    
    a {
      color: #fff;
    }
  }
`;

export const StepBox = styled.div`
  position: relative;

  &:hover ${ BoxModule } {
    opacity: 1;
    display: flex;
    z-index: 100;
  }

  &:not(:hover) ${ BoxModule } {
    display: none;
  }
`;