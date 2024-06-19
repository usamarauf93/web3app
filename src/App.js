import './App.css';
import Banner from './components/Banner/Banner.js';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';
import ScrollingList from './components/ScrollingList/ScrollingList.js';
import ShowCase from './components/ShowCase/ShowCase.js';

function App() {
  return (
    <div className="App">
        <Header />
        <Banner />
        <ScrollingList />
        <ShowCase />
        <Footer />
    </div>
  );
}

export default App;
