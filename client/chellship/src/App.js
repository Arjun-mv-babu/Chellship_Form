import './App.css';
import { Route,Routes } from 'react-router-dom';
import Applicant from './components/files/Applicant';
import { RouteConstant } from './routes/RouteConstant';
import Completed from './components/files/Completed';
import Header from './components/files/Header';
import Footer from './components/files/Footer';
import Wage from './components/files/Wage';

function App() {
  return (
    <>
      <Routes>
        <Route path={RouteConstant.APPLICANT} element={<Applicant/>} />
        <Route path={RouteConstant.COMPLETE} element={<Completed/>} />
        <Route path={RouteConstant.HEADER} element={<Header/>} />
        <Route path={RouteConstant.FOOTER} element={<Footer/>} />
        <Route path={RouteConstant.WAGE} element={<Wage/>} />
      </Routes>
    </>
  );
}

export default App;