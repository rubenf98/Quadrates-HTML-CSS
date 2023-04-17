import React from 'react';
import './App.css';
import './NavBar.js';
import Navbar from './NavBar.js';
import './ContentWrapper.js';
import ContentWrapper from './ContentWrapper.js';
import './Footer.js';
import Footer from './Footer.js';
import './modal.js';
import AppModal from './modal.js';
import { useState } from 'react';

//import styled from "styled-components";

function App() {
  const [fileList, setFileList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div>
      <Navbar />
      <ContentWrapper fileList={fileList} setFileList={setFileList} setShowModal={setShowModal}/>     
      <Footer />
      <AppModal  fileList={fileList} showModal={showModal} setShowModal={setShowModal}></AppModal>
    </div>
  );
}

export default App;