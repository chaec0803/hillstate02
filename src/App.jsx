import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Setting from "./pages/Setting";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/setting" element={<Setting/>}/>
            </Routes>
        </Router>
    )
}

export default App;