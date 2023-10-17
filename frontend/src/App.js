// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Managerhome from './components/Managerhome';
import Projectlist from './components/Projectlist';
import Employeelist from './components/Employeelist';
import Addemployee from './components/Addemployee';
import Addproject from './components/Addproject';
import Projectdetail from './components/Projectdetail';
import Hrhome from './components/Hrhome';
import Assignproject from './components/Assignproject';
import Hrprojectlist from './components/Hrprojectlist';
import Hrprojectdetail from './components/Hrprojectdetail';
// import Updateemployee from './components/Updateemployee';


function App() {
  // const isLoggedIn = false;
  return (
    <BrowserRouter>
    <header>
      {/* <Header /> */}
    </header>
    <main>
    <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/home' element={<Managerhome />} />
          <Route path='/projects' element={<Projectlist />} />
          <Route path='/hremployees' element={<Employeelist />} />
          <Route path='/hraddemployee' element={<Addemployee />} />
          <Route path='/addproject' element={<Addproject />} />
          <Route path='/projectdetail/:id' element={<Projectdetail />} />
          <Route path='/hrhome' element={<Hrhome />} />
          <Route path='/assignproject' element={<Assignproject />} />
          <Route path='/hrprojects' element={<Hrprojectlist />} />
          <Route path='/hrprojectdetail/:id' element={<Hrprojectdetail />} />
          <Route path='/updateemployee/:id' element={<Addemployee />} />




    </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
