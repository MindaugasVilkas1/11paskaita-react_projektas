import './App.css';
import About from './components/about';
import Home from './components/home';
import { Routes, Route } from "react-router-dom";
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={
          <Home/>}
        />
        <Route path="/about/:id" element={<About

        />} />
      </Routes>
    <Footer/> 
    </div>
  );
}

export default App;
