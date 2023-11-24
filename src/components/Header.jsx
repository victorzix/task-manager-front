import styled from 'styled-components';
import { COLORS } from '../globalStyles';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
	width: 100vw;
	height: 12vh;
	display: flex;
  align-items: center;
  justify-content: center;
  gap: 6em;
  font-size: 1.2em;
  font-weight: bold;
  padding: 4em 0em;
  
  a {
    text-decoration: none;
    color: ${COLORS.textWhite};
    transition: all ease-in-out 200ms;
    &:hover {
      opacity: .8;
    }
  } 

  @media (max-width: 1366px) {
    height: 4vh;
    width: 100vw;
    font-size: 1em;
  }
`;

export default function Header() {
	return (
		<>
			<HeaderWrapper>
				<span><Link to="/">Home</Link></span>
				<span><Link to="/about">About the project</Link></span>
				<span><Link to="/contacts">Contacts</Link></span>
			</HeaderWrapper>
		</>
	);
}
