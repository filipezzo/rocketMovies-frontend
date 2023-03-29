import styled from "styled-components";


export const Container = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
>h2{
  font-size: 3.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.WHITE};
}
`