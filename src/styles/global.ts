import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export default createGlobalStyle`
    ${normalize}

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        scroll-snap-type: y mandatory;
        font-size: 70px;
    }
    
    body {
        font-family: ${({ theme }) => theme.fonts}, sans-serif;
        color: ${({ theme }) => theme.colors.main};
        background-color: ${({ theme }) => theme.colors.secondary};
        line-height: 1.4;
    }
`
