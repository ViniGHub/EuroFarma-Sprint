import styled from 'styled-components';

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
`

export const SearchSection = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`

export const EurofarmaLogo = styled.img `
    width: 60%;
`

export const SearchLibrary = styled.input `
    width: 65%;
    height: 75px;
    padding: 0 40px;
    border-radius: 50px;
    font-size: 40px;
    border: 1px solid rgba(0, 0, 0, 0.26);

    placeholder {
        color: rgba(0, 0, 0, 0.26);
    }
`

export const RoutingButtons = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 100px 170px;
    width: 100%;
`

export const Buttons = styled.p `
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