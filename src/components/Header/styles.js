import styled from "styled-components";

export const Container = styled.header`

grid-area: header;
display: flex;
align-items: center;
justify-content: space-around;

  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  
`

export const Brand = styled.div`
>h1{
  color:${({ theme }) => theme.COLORS.PINK};
}
`

export const Profile = styled.div`
display: flex;
align-items: center;

>div{
  margin-right: .9rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  >strong{
    font-size: 1.4rem;
  }
  >span{
    align-self: flex-end;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.8rem;
    color: #948F99;
  }
}

>img{
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
}
`