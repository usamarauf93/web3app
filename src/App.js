import './App.css';
import Banner from './components/Banner/Banner.js';
import Header from './components/Header/Header.js';
import ScrollingList from './components/ScrollingList/ScrollingList.js';
import Showcase from './components/ShowCase/ShowCase.js';
function App() {
  return (
    <div className="App">
        <Header />
        <Banner />
        <ScrollingList />
        <Showcase />
    </div>
  );
}

export default App;
