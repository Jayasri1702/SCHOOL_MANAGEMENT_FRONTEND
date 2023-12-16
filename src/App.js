import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

import{HashRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './Pages/LoginPage';
import LandingPage from './Pages/LandingPage';
import Header from './Components/Header';
import Admin from './Pages/Admin';
import Student from './Pages/Student';
import StudentProfile from './Pages/students/StudentProfile';
import ViewAttendance from './Pages/students/ViewAttendance';
import ViewMarks from './Pages/students/ViewMarks';
import Teacher from './Pages/Teacher';
import TeacherProfile from './Pages/teachers/TeacherProfile';
import Classes from './Pages/teachers/Classes';
import TeacherSchedule from './Pages/teachers/TeacherSchedule';
import TeacherAttendance from './Pages/teachers/TeacherAttendance';

import UserList from './Pages/users/UserList';
import UserEdit from './Pages/users/UserEdit'
import UserDelete from './Pages/users/UserDelete';

import ClassList from './Pages/classes/ClassList';
import ClassEdit from './Pages/classes/ClassEdit';
import ClassDelete from './Pages/classes/ClassDelete';


import TeacherList from './Pages/teachers/TeacherList';
import TeacherEdit from './Pages/teachers/TeacherEdit';
import TeacherDelete from './Pages/teachers/TeacherDelete';


import StudentList from './Pages/students/StudentList';
import StudentEdit from './Pages/students/StudentEdit';
import StudentDelete from './Pages/students/StudentDelete';
import StudentView from './Pages/students/StudentView';
import ClassView from './Pages/classes/ClassView';
import TeacherView from './Pages/teachers/TeacherView';
import UserView from './Pages/users/UserView';
import AddStudent from './Pages/students/AddStudent';
import AddTeacher from './Pages/teachers/AddTeacher';
import StudentClassList from './Pages/classes/StudentClassList';
import Parent from './Pages/Parent';
import StudentParentList from './Pages/students/StudentParentList';
import StudentParentMarkList from './Pages/students/StudentParentMarkList';
import StudentMarkView from './Pages/students/StudentMarkView';
import AddUser from './Pages/users/AddUser';
import EnterMarks from './Pages/teachers/EnterMarks';
import ClassSchedule from './Pages/classes/ClassSchedule';
import AddClass from './Pages/classes/AddClass';
import Help from './Components/Help';



function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Routes>
          
          <Route path='/' element={<LandingPage />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/student' element={<Student />} />

          <Route path='/parent' element={<Parent />} />
          <Route path='/student/student-parent-list' element={<StudentParentList />} />
          <Route path='/student/student-parent-mark-list' element={<StudentParentMarkList />} />
          <Route path='/student/view-student-marks' element={<StudentMarkView />} />



          <Route path='/student/view_attendance' element={<ViewAttendance />} />
          <Route path='/student/student_profile' element={<StudentProfile />} />
          <Route path='/student/view_marks' element={<ViewMarks />} />
          <Route path='/help' element={<Help />} />

          <Route path='/teacher' element={<Teacher />} />
          <Route path='/teacher/teacher_profile' element={<TeacherProfile />} />
          <Route path='/teacher/classes' element={<Classes />} />
          <Route path='/teacher/enter-marks' element={<EnterMarks />} />

          <Route path='/teacher/teacher_schedule' element={<TeacherSchedule />} />

          <Route path='/teacher/teacher_attendance' element={<TeacherAttendance />} />

          <Route path='/user/userlist' element={<UserList />} />
          <Route path='/user/edit-user' element={<UserEdit />} />
          <Route path='/user/view-user' element={<UserView />} />
          <Route path='/user/delete-user' element={<UserDelete />} />
          <Route path='/user/add-user' element={<AddUser />} />


          <Route path='/class/add-class' element={<AddClass />} />

          <Route path='/class/class-list' element={<ClassList />} />
          <Route path='/class/view-class' element={<ClassView />} />
          <Route path='/class/edit-class' element={<ClassEdit />} />
          <Route path='/class/delete-class' element={<ClassDelete />} />
          <Route path='/class/view-schedule' element={<ClassSchedule />} />


          <Route path='/teacher/add-teacher' element={<AddTeacher />} />
          <Route path='/teacher/teacher-list' element={<TeacherList />} />
          <Route path='/teacher/view-teacher' element={<TeacherView />} />
          <Route path='/teacher/edit-teacher' element={<TeacherEdit />} />
          <Route path='/teacher/delete-teacher' element={<TeacherDelete />} />


          <Route path='/student/add-student' element={<AddStudent />} />
          <Route path='/student/student-list' element={<StudentList />} />
          <Route path='/student/student-class-list' element={<StudentClassList />} />
          <Route path='/student/edit-student' element={<StudentEdit />} />
          <Route path='/student/view-student' element={<StudentView />} />
          <Route path='/student/delete-student' element={<StudentDelete />} />





          <Route path='/loginpage' element={<LoginPage />} />

        </Routes>
      </Router>


    </div>
  );
}

export default App;