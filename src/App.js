import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/home/Home';
import Submit from './pages/Submit';
import Courses from './pages/courses/Courses';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import SingleCourse from './pages/singlecourse/SingleCourse';
import Dashboard from './pages/Dashboard';
import Login from './pages/login/Login';
import ProtectedRoute from './pages/ProtectedRoute';
import SharedCoursesLayout from './pages/SharedCoursesLayout/SharedCoursesLayout'
import SignUp from './pages/SignUp/SignUp';
import UnderReview from './pages/underReview';

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='IITK-course-helper/' element={<Home />} />
          <Route path='submit' element={<Submit />} />

          <Route path='courses' element={<SharedCoursesLayout />}>
            <Route index element={< Courses />} />
            <Route path=':courseId' element={<SingleCourse />} />
          </Route>

          <Route path='login' element={<Login setUser={setUser}></Login>} />
          <Route path='signup' element={<SignUp setUser={setUser}></SignUp>} />
          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path='underreview' element={<UnderReview></UnderReview>} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
