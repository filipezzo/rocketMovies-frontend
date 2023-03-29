import styled from "styled-components";
import img from '../../assets/cinema.png';

export const Container = styled.div`

height: 100vh;
display: flex;
align-items: stretch;
`

export const Form = styled.form`
padding: 0 13.6rem;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
text-align: center;
.inputs{
  
  max-width: 30rem;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

>h1{
  font-size: 4.8rem;
  color: ${({ theme }) => theme.COLORS.PINK}
}
>h2{
  font-size: 2.4rem;
  margin: 4.8rem 0;
}

>p{
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
}

>a{
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.PINK};
  margin-top: 12.4rem;
}
`
export const Background = styled.div`
flex:1;
background: url(${img}) no-repeat center center;
background-size: cover;

`