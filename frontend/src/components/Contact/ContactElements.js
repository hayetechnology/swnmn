import styled from 'styled-components';
import {darktorquise, torquise, lighttorquise, triplelightblue, white, black, darkpurple, purple, lightpurple, doublelightpurple} from '../../components/colors';

export const ContactContainer = styled.div`
  height:970px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  background-color: ${purple};
  //background-color: yellow;
  //yellow
  
  
  @media screen and (max-width: 880px) {
    height: 1760px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    background-color: ${white};
    //background-color: yellow;
    //yellow
  }

  @media screen and (max-width: 480px) {
    max-height:1160px;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 120px 0px 120px 0px;
    margin: 0px;
    background-color: ${purple};
    //background-color: yellow;
    //yellow
  }
`;

export const ContactWrapper = styled.div`
  height: 800px;
  width: 1500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 20px 0px;
  margin: 0px;
  background-color: ${purple};
  //background-color: orange;
  //orange
  
  @media screen and (max-width: 880px) {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    //background-color: ${torquise};
    //dirty-green-dark-blueish
  }

  @media screen and (max-width: 480px) {
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    background-color: ${lighttorquise};
    //background-color: orange;
    //orange */
  }
`;

export const Form = styled.form`
  max-width: 42%;
  max-height: 75%;
  text-align: left;
  width: 3fr;
  display: grid;
  margin: 0 auto;
  padding: 0px 32px 40px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  background-color: ${torquise};
  //background-color: green;
  //dark-purple
  
  @media screen and (max-width: 480px) {
    max-height: 100%; 
    min-width: 258px;
    width:240%;
    padding: 16px 24px 40px 24px;
    margin:0px;
    background-color: ${torquise};
    //background-color: green;
    //green
  }
`;

export const FormH1 = styled.h1`
  margin: 10px 0px;
  color: ${white};
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

export const Cont = styled.div`
  display: grid;
  grid-template-columns:auto auto;
  grid-gap: 28px;
  padding: 0px;
  width: 100%;
 
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns:auto;
    grid-gap: 28px;
    padding: 0px;
  } 
`;

export const ContMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const ContIn = styled.div`
  display: grid;
  grid-template-columns:auto;
  grid-gap: 0 px;
  margin-top: 28 px;
  @media screen and (max-width: 768px) {
    margin-top: 14px;
    margin-bottom: 14px;
  } 
`;

export const ContSub = styled.div`
  display: grid;
  grid-template-columns:auto;
  grid-gap: 0 px;
  margin-top: 28 px;
  
  @media screen and (max-width: 768px) {
    margin-top: 14px;
    margin-bottom: 14px;
  } 
`;

export const ContLeft = styled.div`
  display: grid;
  grid-template-columns:auto;
  grid-gap: 0 px;
  padding: 0 px;
  @media screen and (max-width: 768px) {
  } 
`;

export const ContRight = styled.div`
  display: grid;
  grid-template-columns:auto;
  grid-gap: 0 px;
  padding: 0 px;
  
  @media screen and (max-width: 768px) {
    margin-top: 14px;
    margin-bottom: 14px;
  } 
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: ${white};
`;

export const FormInput = styled.input`
  padding: 14px 16px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
  width: 100%;
`;

export const FormInputFName = styled.input`
  padding: 14px 16px;
  margin-bottom: 12px;
  border: none;
  border-radius: 4px;
  width: 100%;
`;

export const FormInputLName = styled.input`
  padding: 14px 16px;
  margin-bottom: 12px;
  border: none;
  border-radius: 4px;
  width: 100%;
`;

export const FormTextArea = styled.input`
  padding: 4px 0px 80px 0px;
  margin-bottom: 20px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: ${darkpurple};
  padding: 8px 0px 12px 0px;
  margin: 16px 0;
  border: none;
  border-radius: 4px;
  color: ${white};
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  float: right;
  align-items: start;
  margin-top: 24px;
  color: ${darkpurple};
  font-size: 16px; 
`;