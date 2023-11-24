import Dashboard from './components/Dashboard/Dashboard';
import HomePage from './components/Homepage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
