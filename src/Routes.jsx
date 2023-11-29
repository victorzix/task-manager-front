import Dashboard from './components/Dashboard/Dashboard';
import HomePage from './components/Homepage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import { Routes, Route } from 'react-router-dom';
import { Protected } from './components/Protected';
import ForToday from './components/Dashboard/ForToday';
import Tasks from './components/Dashboard/Tasks';
import CompletedTasks from './components/Dashboard/CompletedTasks';
import Profile from './components/Dashboard/Profile';

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route
        
				path="/dashboard"
				element={
					<Protected>
						<Dashboard />
					</Protected>
				}
			>

				<Route path="profile" element={<Profile />}/>
				<Route path="for-today" element={<ForToday />}/>
				<Route element={<Tasks />} index/>
				<Route path="completed" element={<CompletedTasks />} />
			</Route>
		</Routes>
	);
}
