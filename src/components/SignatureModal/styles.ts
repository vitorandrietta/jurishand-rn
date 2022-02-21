import styled from 'styled-components/native';

import theme from '~/styles/theme';
import jobsImage from 'assets/icons/jobs.svg';
import { withOpacity } from '~/styles/colors';

import { Button } from 'react-native-paper';
import { StyleProp, TextStyle } from 'react-native';

const MainContainer = styled.View`
  padding: 4%;
  margin-left: 5%;
  margin-right: 5%;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 30px;
  height: 95%;
  display: flex;
  align-items: center;
  background-color: ${withOpacity('#979797', 0.3)};
  border-radius: 4px;
`;

const MainTitle = styled.Text`
  line-height: 35px;
  font-family: ${theme.fonts.medium.fontFamily};
  font-size: 24px;
  color: black;
  margin-left: 3%;
  text-align: center;
`;

const SignatureTitle = styled.Text`
  color: #43505c;
  font-family: ${theme.fonts.medium.fontFamily};
  font-size: 22px;
  text-align: center;
  color: ${withOpacity('#000000', 0.3)};
`;

const SignatureMainPrice = styled(SignatureTitle)`
  color: black;
`;

const SignatureButton = styled(Button)`
  background-color: white;
  margin-top: 30px;
  border-color: #f751a0;
  border-radius: 5px;
  border-width: 3px;
  height: 60px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ModalShadeStyle = {
  shadowColor: withOpacity('#979797', 0.3),
  shadowOffset: {
    width: 2,
    height: 5,
  },
  shadowOpacity: 1,
  shadowRadius: 1,
  height: '90%',
};

const SignatureButtonLabelStyle: StyleProp<TextStyle> = {
  textTransform: 'capitalize',
  color: '#F751A0',
  fontSize: 20,
  width: '100%',
};

const JobsLogo = styled(jobsImage)``;

export {
  JobsLogo,
  MainContainer,
  MainTitle,
  SignatureTitle,
  ModalShadeStyle,
  SignatureButton,
  SignatureButtonLabelStyle,
  SignatureMainPrice,
};
