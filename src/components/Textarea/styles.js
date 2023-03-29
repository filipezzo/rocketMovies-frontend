import styled from "styled-components";


export const Container = styled.div`

width: 130rem;
height: 27.4rem;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
color: ${({ theme }) => theme.COLORS.WHITE};

border: none;
resize: none;
margin-bottom: .8rem;
border-radius: 1rem;
padding: 1.6rem;

&::placeholder{
  color: ${({ theme }) => theme.COLORS.GRAY_300};
}
`