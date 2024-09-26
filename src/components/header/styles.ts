import styled from 'styled-components';

export const HeaderContainner = styled.header `
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #34C5E4;
    padding: 20px 10px;
    width: 100%;
    height: 70px;
    z-index: 2;
`

export const LogoMatamba = styled.img `
    height: 60px;
    margin: 0 20px;
`

export const HeaderRight = styled.div `
    display: flex;
    gap: 20px;
    align-items: center;

    img {
        mix-blend-mode: color-burn;
        width: 30px;
    }

    div> a {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }
`