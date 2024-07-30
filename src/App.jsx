import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Basic from 'pages/Basic';
import Home from 'pages/Home';
import Premium from 'pages/parcel/Premium';
import Estate from 'pages/parcel/Estate';
import ParcelLayout from 'pages/parcel/ParcelLayout';
import Design from 'pages/goods/Design';
import Community from 'pages/goods/Community';
import Smart from 'pages/goods/Smart';
import Space from 'pages/Space';
import SideTap from 'components/SideTap';
import PopUp from 'components/PopUp';
import { useState } from 'react';
import Circle from 'components/Circle';
import NotFound from 'pages/NotFound';
import { getCookie } from './util/cookie';

function App() {
  const [isShow, setIsShow] = useState(getCookie('isShow') !== 'false');
  const [isTabShow, setIsTabShow] = useState(true);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basic" element={<Basic />} />
          <Route path="/parcel/premium" element={<Premium />} />
          <Route path="/parcel/layout" element={<ParcelLayout />} />
          <Route path="/parcel/estate" element={<Estate />} />
          <Route path="/goods/design" element={<Design />} />
          <Route path="/goods/community" element={<Community />} />
          <Route path="/goods/smart" element={<Smart />} />
          <Route path="/space" element={<Space />} />
          <Route element={<NotFound />} />
        </Routes>
      </Router>
      {isShow && (
        <PopUp
          setIsShow={() => {
            setIsShow(false);
          }}
        />
      )}
      {isTabShow && <SideTap />}
      <Circle
        isShow={isTabShow}
        setIsShow={() => {
          setIsTabShow(!isTabShow);
        }}
      />
    </>
  );
}

export default App;
