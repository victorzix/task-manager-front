import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../auth/auth';

// eslint-disable-next-line react/prop-types
export function Protected({ children }) {
	const isLogged = isAuthenticated();
	if (!isLogged) {
		return <Navigate to="/login" />;
	}

	return children;
}
