import './App.css';
import { Route,Routes } from 'react-router-dom';
import Applicant from './components/files/Applicant';
import FamilyParticulars from './components/files/FamilyParticulars';
import EducationBackground from './components/files/EducationBackground';
import General from './components/files/General';
import Experience from './components/files/Experience';
import Medical from './components/files/Medical';
import IdentityDocuments from './components/files/IdentityDocuments';
import Certificate from './components/files/Certificate';
import { RouteConstant } from './routes/RouteConstant';
import Compulsory from './components/files/Compulsory';
import Completed from './components/files/Completed';

function App() {
  return (
    <>
      <Routes>
        <Route path={RouteConstant.APPLICANT} element={<Applicant/>} />
        <Route path={RouteConstant.COMPLETE} element={<Completed/>} />
      </Routes>
    </>
  );
}

export default App;