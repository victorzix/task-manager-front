import { useEffect, useState } from 'react';
import ApiHandler from '../../api/ApiHandler';
import styled from 'styled-components';
import { COLORS } from '../../globalStyles';
import { NavLink } from 'react-router-dom';

const SideBarContainer = styled.div`
	height: 100vh;
	background-color: ${COLORS.textWhite};
	width: 15vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 18em;

	.top {
		margin-top: 3em;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5em;
		width: 100%;
		justify-content: center;

		.profileContainer {
			width: 3em;
			height: 3em;
			background-color: ${COLORS.bgOrange};
			border-radius: 1.5em;
			display: flex;
			justify-content: center;
			align-items: center;
			color: ${COLORS.textWhite};
			font-weight: bold;
			font-size: 1.2em;
		}

		a {
			text-decoration: none;
			color: ${COLORS.bgOrange};
			font-weight: bold;
			font-size: 0.9em;
			transition: all ease-in-out 150ms;

			&:hover {
				transform: scale(1.05);
			}
		}
	}
`;

const Options = styled.ul`
	list-style: none;
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 1.8em;
	align-items: center;
	padding: 0;
`;

const NavOption = styled(NavLink)`
	text-decoration: none;
		color: ${COLORS.bgOrange};
  &.active {
			position: relative;
			font-weight: bold;

      &::after {
        content: '';
        width: 105%;
        height: .3em;
        background-color: ${COLORS.bgOrange};
				top: 100%;
				left: -55%;
				transform: translate(50%, 0);
				color: red;
				position: absolute;
				animation: activateBar 300ms ease-in;
				border-radius: 4em;
      }

			@keyframes activateBar {
				from {
					width: 0%;
				}

				to {
					width: 105%;
				}
			}
  }
`;

export default function SideBar() {
	const [userName, setUserName] = useState('');

	async function getApiData() {
		const response = await ApiHandler.getData();
		setUserName(response.data.name.charAt(0));
	}

	useEffect(() => {
		getApiData();
	}, []);

	return (
		<>
			<SideBarContainer>
				<div className="top">
					<div className="profileContainer">{userName}</div>
					<NavLink to='profile'>Profile</NavLink>
				</div>

				<Options>
					<NavOption className={({ isActive }) => isActive ? 'active' : ''} to='/dashboard' end>
							Tasks
					</NavOption>
					<NavOption className={({ isActive }) => isActive ? 'active' : ''} to='for-today'>
							For Today
					</NavOption>
					<NavOption className={({ isActive }) => isActive ? 'active' : ''} to='completed'>
							Completed
					</NavOption>
				</Options>
			</SideBarContainer>
		</>
	);
}
