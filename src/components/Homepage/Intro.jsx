import styled from "styled-components"
import { COLORS } from "../../globalStyles"

const ContentWrapper = styled.div`
  color: ${COLORS.textWhite};
  font-weight: bold;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5em;
  text-align: center;
  gap: 1em;
  h1 {
    font-size: 3.3em;
    margin: 0;
  }

  p {
    margin: 0;
    font-weight: 500;
    font-size: 1.3em;
    width: 15em;
  }
`

const Buttons = styled.div`
  margin-top: 3em;
  display: flex;
  gap: 6em;

  button {
    font-weight: bold;
    width: 11em;
    height: 3.3em;
    border-radius: .4em;
    transition: all ease-in-out 150ms;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  }
  
  .registerBtn {
    border: 0;
    background-color: ${COLORS.textWhite};
    color: ${COLORS.bgOrange};
  }

  .loginBtn {
    background-color: transparent;
    color: ${COLORS.textWhite};
    border: 1px solid ${COLORS.textWhite};
  }
`

export default function Intro() {
  return (
    <ContentWrapper>
      <h1>Task Manager</h1>
      <p>Write down your tasks and have it organized</p>

      <Buttons>
        <button className="registerBtn">Register</button>
        <button className="loginBtn">Login</button>
      </Buttons>
    </ContentWrapper>
  )
}