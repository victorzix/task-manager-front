import styled from 'styled-components';
import Header from '../Header';
import { COLORS } from '../../globalStyles';
import { FaUserCircle } from 'react-icons/fa';

const FormWrapper = styled.div`
	height: 100%;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const FormContainer = styled.div`
	background-color: ${COLORS.textWhite};
	height: 35em;
	width: 30em;
	display: flex;
	flex-direction: column;
	padding: 2em 2em;
	align-items: center;

	.top {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		height: 7em;
		flex-direction: column;
		margin: 0;
	}
	.icon {
		font-size: 3em;
	}

	h3 {
		font-size: 1.3em;
	}

  a {
    color: ${COLORS.bgOrange};
  }

	@media (max-width: 1366px) {
		height: 25em;
		width: 20em;

		.top {
			height: 6em;
		}

		h3 {
			font-size: 1em;
		}

		p {
			font-size: .9em;
		}
	}
`;

const Form = styled.form`
	height: 23em;
	width: 65%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 4em;

	.inputs {
		display: flex;
		flex-direction: column;
		gap: 3em;

		div {
			display: flex;
			flex-direction: column;
			gap: 0.4em;

			input {
				width: 20em;
				height: 2em;
				box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
			}

			label {
				font-weight: bold;
				font-size: 0.8em;
			}
		}
	}

	button {
		height: 3.5em;
		width: 16em;
		background-color: ${COLORS.bgOrange};
		color: ${COLORS.textWhite};
		border: 0;
		border-radius: 0.4em;

		transition: all ease-in-out 200ms;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      background-color: transparent;
      color: ${COLORS.bgOrange};
      border: 1px solid ${COLORS.bgOrange};
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
	}

	@media (max-width: 1366px) {
		height: 20em;
		gap: 2em;
		width: 50%;

		.inputs {
			gap: 2em;

			div {
				gap: 0.2em;

				input {
					width: 18em;
				}

				label {
					font-size: 0.7em;
				}
			}
		}

		button {
			height: 2.4em;
			width: 13em;
		}
	}
`;

export default function LoginPage() {
	return (
		<>
			<Header />
			<FormWrapper>
				<FormContainer>
					<div className="top">
						<FaUserCircle className="icon" />
						<h3>Log in into your account</h3>
					</div>

					<Form>
						<div className="inputs">
							<div className="emailInput">
								<label htmlFor="email">Email</label>
								<input type="text" name="email" />
							</div>
							<div className="passwordInput">
								<label htmlFor="password">Password</label>
								<input type="text" name="password" />
							</div>
						</div>
						<button>Login</button>
					</Form>
        <p>Not registered yet? <a href="">Register Now</a></p>
				</FormContainer>
			</FormWrapper>
		</>
	);
}
