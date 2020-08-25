import styled, { createGlobalStyle } from 'styled-components';

export const black = '#252020';
export const darkGrey = '#515263';
export const mediumGrey = '#dad9d9';
export const lightGrey = '#f7f7f7';
export const brandColor = '#CAF0F8';

export const GlobalStyle = createGlobalStyle`
    body{
        h1{
            ${({ dark }) => dark && `color:${brandColor}`};
        }
        color:${darkGrey};
        background-color:${({ dark }) => (dark ? black : lightGrey)};
        font-family: 'Blinker', sans-serif;
    }
`;
