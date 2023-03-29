import styled from "styled-components";


export const Container = styled.div`

width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 11.6rem auto;
grid-template-areas:
"header"
"content";

>main{
  grid-area: content;
  margin: 4rem 10.6rem auto 14.6rem;
  overflow-y: auto;
  >p{
  margin-top: 4rem;
}
>a{
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.PINK};
}

.author{
  display: flex;
  align-items: center;
  margin-top: 2.4rem;
  gap: .8rem;
}
 
 .author img{
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
}
.author{
  margin-bottom: 4rem;
}
.author span{
  font-weight: 400;
  font-size: 1.4rem;
  
}
.authorTime{
  display: flex;
  align-items: center;
  
  gap: .8rem;
}
.aboutit{
  display: flex;
  gap: 2rem;


  svg{
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  span{
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}
}


`

