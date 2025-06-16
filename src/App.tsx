import React from 'react';
import PageLayout from './layouts/PageLayout/PageLayout';
import HomePage from './features/HomePage/HomePage';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // If using routing

const App: React.FC = () => {
    return (
        // <Router> {/* Uncomment if using React Router */}
        <PageLayout>
            {/* <Routes> */}
            {/* <Route path="/" element={<HomePage />} /> */}
            {/* Add other routes here */}
            {/* </Routes> */}
            <HomePage /> {/* For single-page app structure initially */}
        </PageLayout>
        // </Router>
    );
};

export default App;