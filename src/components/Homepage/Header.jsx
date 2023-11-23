import styled from 'styled-components';
import { COLORS } from '../../globalStyles';

const HeaderWrapper = styled.header`
	width: 100vw;
	height: 12vh;
	display: flex;
  align-items: center;
  justify-content: center;
  gap: 6em;
  font-size: 1.2em;
  font-family: 'Inter', sans-serif;
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
`;

export default function Header() {
	return (
		<>
			<HeaderWrapper>
				<span><a href="">Home</a></span>
				<span><a href="">About the project</a></span>
				<span><a href="">Contacts</a></span>
			</HeaderWrapper>
		</>
	);
}
