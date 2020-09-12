import React from 'react';
import './App.css';
import Navbar from './Header/Navbar';
import Sidebar from './Header/Sidebar';
// import Footer from './Footer/Footer  
import Main from './Body/Main';

// React Router liên kết tới các link https

function App() {
    return (
        
    <div className="wrapper">
        <Navbar />
        <Sidebar />
        <Main />
        {/* <Footer /> */}
    </div>

    );
}

export default App;
