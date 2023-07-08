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
        font-size: 16px;
    }
    
    #root {
        margin: 0 auto;
    }
    
    body {
        font-family: ${({ theme }) => theme.fonts}, sans-serif;
        font-size: ${({ theme }) => theme.fontSizes.medium};
        color: ${({ theme }) => theme.colors.main};
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`
