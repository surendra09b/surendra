import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Signup from './Signup'
import Signin from './Signin';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import '@fortawesome/fontawesome-free/css/all.css';
import About from './About';
import Contact from './Contact';
import Webdevelopment from './Webdevelopment';
import Appdevelopment from './Appdevelopment';
import Cloudcomputing from './Cloudcomputing';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Signup/>} />
    <Route path='/signin' element={<Signin/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/webdevelopment' element={<Webdevelopment/>} />
    <Route path='/appdevelopment' element={<Appdevelopment/>} />
    <Route path='/cloudcomputing' element={<Cloudcomputing/>} />
    <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
export default App;
