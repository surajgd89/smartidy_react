
import Home from './components/home/Home';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import Payus from './components/payus/Payus';
import Tabs from './layout/tabs/Tabs';
import './App.scss';


function App() {
  return (
    <div className="wrapper">
      <div className="inner-body">
        <Home />
        <About />
        <Gallery />
        <Payus />
        <Tabs />
        <div className="page-loader"></div>
      </div>
    </div>
  );
}

export default App;
