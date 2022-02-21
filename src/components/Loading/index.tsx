import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import colors from '~/styles/colors';

interface Props {
  style?: StyleProp<ViewStyle>;
  loading?: boolean | undefined;
  color?: string | undefined;
  size?: 'small' | 'large';
}

const Loading: React.FC<Props> = ({
  style,
  loading = true,
  color = colors.primary,
  size = 'large',
}: Props) => (
  <ActivityIndicator
    size={size}
    // eslint-disable-next-line react-native/no-inline-styles
    style={[style, { flex: 1, padding: 20 }]}
    animating={loading}
    color={color}
  />
);

export default Loading;
