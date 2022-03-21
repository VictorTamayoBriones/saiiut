import styled from 'styled-components';
import { theme } from '../../theme';

export const AsideLogin = styled.aside`
    width: 30%;
    height: 100vh;
    background: ${ theme.verde };
    color: transparent;
    overflow: hidden;
    font-size: 65px;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    letter-spacing: 5px;
    box-shadow: 2px 0px 9px rgba(0, 0, 0, 0.5);
    p{
        display: inline-block;
        &:nth-child(even){
            -webkit-text-stroke: 1px ${ theme.naranja };
        }
    }
    -webkit-text-stroke: 1px ${ theme.blanco };
`

export const UttText = styled.div`
    width: calc(100% + 18%);
`;