import styled from "styled-components";


export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 10.5rem auto;
grid-template-areas:
"header"
"content";

>main{
  grid-area: content;
  overflow-y: auto;
  margin: 0 auto;
 
}

.inputs{
  display: flex;
  gap: 4rem;
  margin-bottom: 4rem;
}

.sec{
  >h2{
    margin-bottom: 2rem;
  }
}

.buttons{
  display: flex;
  gap : 4rem;
  margin-top: 4rem;
  >button:nth-child(1){
  background: hsla(260, 11%, 5%, 1);
  color: ${({ theme }) => theme.COLORS.PINK};
  }
}


`

export const Form = styled.form`
>header h1{
margin-bottom: 4rem;
margin-top: 2rem;
text-align: center;
}

`