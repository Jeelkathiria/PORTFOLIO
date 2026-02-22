import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Toaster position="bottom-right" reverseOrder={false} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={
                        <div className="h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-black text-[var(--text-primary)] p-6 text-center">
                            <h1 className="text-9xl font-black text-primary mb-4">404</h1>
                            <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
                            <p className="text-text-secondary mb-10 max-w-md">The page you are looking for might have been removed or is temporarily unavailable.</p>
                            <a href="/" className="btn-glossy">Back to Home</a>
                        </div>
                    } />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
