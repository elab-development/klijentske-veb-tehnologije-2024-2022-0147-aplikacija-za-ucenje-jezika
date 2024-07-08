import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { useLoggedIn } from './hooks/useLoggedIn.hook';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Courses from './pages/Courses';
import Course from './pages/Course';

function App() {
  const { loggedIn } = useLoggedIn();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={loggedIn ? <Home /> : <Navigate to={'/login'} />}
        />
        <Route
          path='/login'
          element={loggedIn ? <Navigate to={'/'} /> : <Login />}
        />
        <Route
          path='/register'
          element={loggedIn ? <Navigate to={'/'} /> : <Register />}
        />
        <Route
          path='/courses'
          element={loggedIn ? <Courses /> : <Navigate to={'/login'} />}
        />
        <Route
          path='/courses/:id'
          element={loggedIn ? <Course /> : <Navigate to={'/login'} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
