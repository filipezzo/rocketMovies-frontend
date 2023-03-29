import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 10px;
  border: none;
  padding: 0 20px;
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: ${({ theme, blackButton }) => blackButton ? theme.COLORS.BACKGROUND_900 : theme.COLORS.PINK};
  color: ${({ theme, blackButton }) => blackButton ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_800};
  font-size: 16px;
`;