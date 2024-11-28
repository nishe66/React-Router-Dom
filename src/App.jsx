import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import CoursesOpen from './Pages/CoursesOpen';
import RootLayout from './components/RootLayout';
import AboutUs from './Pages/AboutUs';
import Pricing from './Pages/Pricing';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Contact from './Pages/Contact';
function App() {


let myRouter = createBrowserRouter(createRoutesFromElements(
   <Route element={<RootLayout/>}>
     <Route path='/' element={<Home/>}/>
     <Route path='/courses' element={<Courses/>}/>
     <Route path='/courses-open' element={<CoursesOpen/>}/>
     <Route path='/about-us' element={<AboutUs/>}/>
     <Route path='/pricing' element={<Pricing/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/sign-up' element={<SignUp/>}/>
     <Route path='/contact' element={<Contact/>}/>
   </Route>


  ))

  return (
    <>
     <RouterProvider router={myRouter}/>
    </>
  )
}


export default App
