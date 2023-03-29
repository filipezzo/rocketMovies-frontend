import styled from "styled-components";

export const Container = styled.div`

>header{
  width: 100%;
  height: 14.4rem;
  background: hsla(349, 100%, 76%, 0.05);
  display: flex;
  align-items: center;
  padding: 0 12.4rem;

  a{
    display: flex;
    align-items: center;
     color: ${({ theme }) => theme.COLORS.PINK};
  }
  svg{
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 1.6rem;
  }
}


`

export const Form = styled.form`
max-width: 34rem;
margin: 0 auto;

>div:nth-child(4){
  margin-top: 2.4rem;
}
>button{
  margin-top: 2.4rem
}
`


export const Avatar = styled.div`
position: relative;
margin: -12.4rem auto 3.2rem;
width: 18.6rem;
height: 18.6rem;

>img{
border-radius: 50%;
width: 18.6rem;
height: 18.6rem;
}
>label{
  width: 4.8rem;
  height: 4.8rem;
  background: ${({ theme }) => theme.COLORS.PINK};
  border-radius: 50%;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: .7rem;
  right: .7rem;
  cursor: pointer;

  input{
    display: none;
  }

  svg{
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
}

`