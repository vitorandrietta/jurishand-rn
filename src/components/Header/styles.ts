import { Appbar, IconButton } from 'react-native-paper';
import styled from 'styled-components/native';

import theme from '~/styles/theme';

const { Content } = Appbar;

type AppBarTitleExtraProps = {
  centralized?: boolean;
};

const AppbarTitle = styled(Content).attrs(() => ({
  titleStyle: { fontSize: 20, ...theme.fonts.regular },
  subtitleStyle: { fontSize: 14 },
  color: 'white',
}))<React.ComponentProps<typeof Content> & AppBarTitleExtraProps>`
  align-items: ${(props) => (props?.centralized ? 'center' : 'flex-start')};
`;

const BackButton = styled(IconButton).attrs(() => ({
  size: 25,
  color: '#7666FC',
}))``;

export { AppbarTitle, BackButton };
