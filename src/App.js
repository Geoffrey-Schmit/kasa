import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import FicheLogement from './pages/FicheLogement/FicheLogement';
import Error from './components/pages/Error/Error';

function App() {
    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/logement/:id" element={<FicheLogement />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
