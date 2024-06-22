import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import ScrollingList from './components/ScrollingList/ScrollingList.js';
import ShowCase from './components/ShowCase/ShowCase.js';
import CardDetails from './components/CardDetails/CardDetails.js';
import CreateToken from './components/CreateToken/CreateToken.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
         
        <Routes>
            <Route index element={
                <>
                  <Banner/>
                  <ScrollingList/>
                  <ShowCase/>
                </>
              } 
            >
            </Route>
            <Route path="/details/:id" element={<CardDetails/>} />
            <Route path="/createtoken" element={<CreateToken/>} />
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
