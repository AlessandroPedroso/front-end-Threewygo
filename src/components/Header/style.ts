import { Link as ReactLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`

    background-color: #703DAF;
    width: 100vw;
    min-height: 5rem;
    color:#fff;

    display: flex;
    justify-content: space-around;
    align-items: center;

`;

export const Link = styled(ReactLink)`
    color:#fff;
    margin-left: 7px;
    text-decoration: none;
    font-size: 1.1rem;

    &&:hover{
        text-decoration: underline;
    }
`;
