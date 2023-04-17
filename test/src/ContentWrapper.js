import React from 'react';
import styled from "styled-components";
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import './modal.js';
import { Progress } from 'antd';
import  { useState } from "react";


const { Dragger } = Upload;


const Wrapper = styled.div`
  width: 66.67%;
  float: none;
  padding: 0 calc(100vw / 6);
  padding-top: 5%;
  padding-bottom: 130px;

  @media only screen and (max-width: 769px) {
    width: 66.6%;
    float: none;
    padding-top: 5%;
    padding-bottom: 130px;
  }
`;

const Content = styled.div`
  background-color: #E6FCFF;
  box-sizing: border-box;
  display: flex;
`;

const Box = styled.div`
  flex-basis: 25%;
  height: 491px;
`;

const MainBox = styled.div`
  flex-basis: 50%;
  height: 491px;
`;

const Titulo = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 58px;
  text-align: center;
  color: #5B10BB;

  @media only screen and (max-width: 769px) {
    font-size: 32px;
  }
`;

const Subtitulo = styled.h2`
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #000000;
`;

const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  height: 300px;
  background-color: white;
`;

// const Subtitulo2 = styled.h2`
//   font-family: 'Inter';
//   font-style: normal;
//   font-weight: normal;
//   font-size: 15px;
//   line-height: 18px;
//   text-align: center;
//   color: #522D82;
//   margin-bottom: 20px;
// //`;

// const Subtitulo3 = styled.h3`
//   font-family: 'Inter';
//   font-style: normal;
//   font-weight: normal;
//   font-size: 16px;
//   line-height: 19px;
//   color: #522D82;
// `;

const WhiteBoxSmallLow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 130px;
  height: 70px;
  background-color: white;
  width: 60%;
  border-radius: 20px;

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const WhiteBoxSmallCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 130px;
  height: 70px;
  background-color: white;
  width: 60%;
  border-radius: 20px;

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const Whiteboxmedlow = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 160px;
    height: 80px;
    background-color: white;
    width: 40%;
    border-radius: 20px;
    margin-left: auto;
    margin-right: 15px;

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const  Whiteboxmedcenter  = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 160px;
      height: 80px;
      background-color: white;
      width: 40%;
      border-radius: 20px;
      margin-left: auto;
      margin-right: 15px;

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;


export default function ContentWrapper({fileList, setFileList,setShowModal}) {
  const [allfilesN, setAllFilesN] = useState(0);
  return (
    <Wrapper>
      <Content>
        <Box>
          <WhiteBoxSmallCenter></WhiteBoxSmallCenter>
          <Whiteboxmedlow></Whiteboxmedlow>
        </Box>
        <MainBox>
          <div>
            <Titulo>Secure Cloud Storage &amp; Communication </Titulo>
          </div>
          <div>
            <Subtitulo>
              lorem ipsum quia dolor sit amet, consectetur, adipisci
            </Subtitulo>
          </div>
          <WhiteBox>
            
            <Dragger 
              name= 'files'
              multiple
              showUploadList ={false}
              accept='.jpeg,.png,.jpg'
              beforeUpload= {(file, allfiles) => {
                setFileList([...fileList, ...allfiles]); 
                setAllFilesN(allfiles.length); 
                const isPNG = file.type === 'image/png';     
                const isJPG = file.type === 'image/jpeg';          
                if (!isPNG && !isJPG) {
                  message.error(`${file.name}`);
                  return false; 
                } else {
                  setShowModal(true); 
                  return true; 
                }             
              }}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                  banned files.
                </p>
            </Dragger>
      
          </WhiteBox>{ <Progress percent={fileList.length * 100 / allfilesN} /> }
          
        </MainBox>
        <Box>
          <Whiteboxmedcenter></Whiteboxmedcenter>
          <WhiteBoxSmallLow></WhiteBoxSmallLow>
        </Box>
      </Content>
    </Wrapper>
  );
}
