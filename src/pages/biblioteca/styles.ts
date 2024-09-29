import styled from "styled-components";

export const MainContainer = styled.div `
    display: flex;
`

export const FiltersSection = styled.div `
    width: 20%;
    height: 100vh;
    position: relative;

    background-color: rgba(128, 117, 117, 0.37);

    padding-top: 120px;
    padding-left: 20px;
    padding-right: 25px;

    border-right: 2px solid rgba(128, 117, 117, 1);

    h1 {
        font-size: 35px;
        font-weight: 600;

        border-bottom: 1px solid black;
    }
    h2 {
        font-size: 25px;
        font-weight: 200;
        margin-top: 30px;
    }
`

export const FilterInputs = styled.div `
    display: flex;
    flex-direction: column;
    align-items:start;
    gap: 12px;

    margin-top: 10px;
    margin-left: 20px;
`

export const FilterContainer = styled.div `
    font-weight: 500;
    font-size: 22px;

    input {
        margin-right: 10px;
    }
`

export const Library = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
    padding-top: 120px;

    gap: 40px;

    width: 100%;
`

export const SearchPages = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 60%;

    input {
        width: 40%;
        height: 45px;
        padding: 0 40px;
        border-radius: 50px;
        font-size: 20px;
        border: 1px solid rgba(0, 0, 0, 0.26);
    }
`

export const Paging = styled.div `
    display: flex;
    gap: 15px;

    button {
        padding: 10px 20px;
        border-radius: 10px;

        background-color: rgba(128, 117, 117, 0.37);
        border-color: seashell;
    }
`

export const LibraryContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    max-width: 90%;

    gap: 100px;
`

export const ContentContainer = styled.div `
    width: 300px;
    height: 250px;
    border: 3px solid rgba(52, 197, 228, 1);
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const TestImage = styled.div `
    width: 120px;
    height: 100px;

    background-color: gray;
`

