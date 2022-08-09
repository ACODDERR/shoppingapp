
import { Route, Routes, Navigate } from "react-router-dom";
import Login  from './components/Login'
import Register from './components/Register'
import Dashboard from "./components/Dashboard";
import Home from './components/Home'



function App() {

	return (
		<Routes>
			<Route path="/" exact element={<Home />} />
			 
			<Route path="/register" exact element={<Register />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/dashboard" exact element={<Dashboard />} />
			
		</Routes>
	);
}

export default App;


