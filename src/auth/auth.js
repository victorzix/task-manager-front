import Cookies from 'js-cookie';

export function isAuthenticated() {
	const token = Cookies.get('access_token');
	if (!token) return false;
	return true;
}
