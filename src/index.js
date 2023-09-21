import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import '../src/styles/css/index.css';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Header />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
