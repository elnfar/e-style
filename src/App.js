import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.scss';
import Header from './components/Header'
import Section from './components/Section';
import { ImageData } from './components/ImageData';
import SecSection from './components/SecSection';

function App() {
  return (
    <div>
        <>  
          <Router>
              <Header/>
              <Section slides={ImageData}/>
                <Routes>
                  <Route path='#' element={<Header/>}/>
                </Routes>
          </Router>
        </>
    </div>
  );
}

export default App;
