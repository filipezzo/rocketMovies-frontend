
import styled from "styled-components"

export const Container = styled.div`
  width: 63rem ;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 10px;
  display: flex;
  
  gap: 10px;
  padding: 20px;
  height: 56px;
  
  input {
    background: transparent;
    width: 100%;
    
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`