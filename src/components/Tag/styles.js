import styled from "styled-components";


export const Container = styled.span`
font-size: 1.2rem;
padding: .5rem 1.4rem;
border-radius: .5rem;
margin-right: .6rem;
text-align: center;

color: ${({ theme }) => theme.COLORS.WHITE};
background: rgba(40, 33, 36, 1);
`