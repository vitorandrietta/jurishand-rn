import styled from 'styled-components/native';
import updateIcon from 'assets/icons/update-arrows.svg';

const MainContainer = styled.SafeAreaView`
  flex: 1;
  padding-left: 18px;
  padding-right: 18px;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 18px;
`;

const MainTitle = styled.Text`
  font-size: 28px;
`;

const UpgradeContainer = styled.TouchableOpacity`
  margin-top: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  display: flex;
`;

const UpgradeText = styled.Text`
  font-size: 18px;
`;

const BottomDescription = styled.Text`
  margin-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
  text-align: center;
  font-size: 18px;
  color: black;
`;

const UpdateIndicator = styled(updateIcon)``;

export {
  MainContainer,
  MainTitle,
  UpgradeContainer,
  UpgradeText,
  UpdateIndicator,
  BottomDescription,
};
