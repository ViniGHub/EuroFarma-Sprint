import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainner = styled.main `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export const TopSection = styled.div `
    margin-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h1 {
        color: #00358E;
        font-size: 50px;
        margin-right: 60px;
    }
`

export const LinkVoltar = styled(Link) `
    background-color: #00358E;
    color: white;
    width: 14.438rem;
    height: 3.75rem;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin: 20px 0 0 100px;
`

export const CardsUp = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    gap: 40px;
`

export const CardsDown = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    gap: 40px;
`

export const CardButton = styled.button `
    width: 50%;
    height: 3.75rem;
    margin: 0 auto;
    border: 0;
    border-radius: 5px;
    
    color: white;
    background-color: #00358E;
`
    
export const FlipCard = styled.div `
    background-color: transparent;
    width: 300px;
    height: 200px;
    border: 1px solid #f1f1f1;
    perspective: 1000px;
`

export const FlipCardInner = styled.div `
     position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    &:hover{
        transform: rotateY(180deg);
    }
`

export const FlipCardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    text-align: center;
    padding: 30px;
    background-color: dodgerblue;
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

export const FlipCardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #bbb;
    color: black;

    transform: rotateY(180deg);
`;