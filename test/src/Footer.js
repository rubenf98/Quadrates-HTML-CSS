import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #FFFF;
  padding: 5%;
`;

const OrangeBox = styled.div`
  background-color: #FFF7F2;
  width: 60%;
  margin: 0 auto;
  padding: 30px;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 32px;
  color: #522D82;
  text-align: left;
  margin-right: 7.5%;

  @media only screen and (max-width: 1200px) {
    font-size: 28px;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

const TextButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  @media only screen and (max-width: 1200px) {
    display: block;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }
`;

const PurpleButton = styled.button`
  color: white;
  padding: 10px 20px;
  border: none;
  width: 25%;
  margin-left: 20px;
  background: #6526B4;
  border-radius: 20px;
  height: 80px;

  @media only screen and (max-width: 1200px) {
    width: 65%;
  }
`;

const ButtonText = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #FFFFFF;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <OrangeBox>
        <TextButtonWrapper>
          <Title>Do you want to 50 GB Free storage?</Title>
          <PurpleButton>
            <ButtonText>Lorem Ipsum</ButtonText>         
          </PurpleButton>
        </TextButtonWrapper>
      </OrangeBox>
    </FooterWrapper>
  );
}
