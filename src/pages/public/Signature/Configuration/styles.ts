import styled from 'styled-components/native';
import updateIcon from 'assets/icons/update-arrows.svg';

const MainContainer = styled.SafeAreaView`
  flex: 1;
  padding-left: 18px;
  padding-right: 18px;
`;

const MainTitle = styled.Text`
  font-size: 28px;
  color: black;
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
  color: black;
`;

const UpdateIndicator = styled(updateIcon).attrs(() => ({
  height: 30,
  width: 20,
}))`
  margin-right: 20;
`;

export { MainContainer, MainTitle, UpgradeContainer, UpgradeText, UpdateIndicator };
