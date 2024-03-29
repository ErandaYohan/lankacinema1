import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';
import Header from './component/Header/Header';
// import Footer from './components/footer/Footer';

import Routes from './config/Router';

function App() {
  return (
    <BrowserRouter>
            <Route render={props => (
                <>
                    <Header {...props}/>
                    <Routes/>
                    {/* <Footer/> */}
                </>
            )}/>
        </BrowserRouter>
  );
}

export default App;
