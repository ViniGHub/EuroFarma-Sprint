import styled from "styled-components";
import { Link } from "react-router-dom";

export const VideoSection = styled.div `
    min-height: 100vh;
    height: 100%;
    min-height: 100vh;
    height: 100%;
`

export const TopSection = styled.div `
    width: 100%;
    padding: 100px 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;

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

export const DisplaySection = styled.div `
    width: 100%;
    min-height: 700px;
    display: flex;
    padding: 0 100px;
`

export const VideoDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 25px;

    iframe {
        width: 80%;
        height: 600px;
    }
`

export const Comments = styled.div `
    padding: 0 70px 0 0;
`

export const CreateComment = styled.input `
    width: 100%;
    height: 75px;
    padding: 0 40px;
    border-radius: 50px;
    font-size: 20px;
    border: 1px solid rgba(0, 0, 0, 0.26);
`

export const Comment = styled.div `
    display: flex;
    align-items: center;
    margin: 20px 50px 20px 0;
    gap: 10px;
    border-radius: 50px;
    background-color: ghostwhite;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`

export const Exercises = styled.aside `
    display: flex;
    flex-direction: column;
    gap: 20px;

    ul {
        list-style: none;
    }
`