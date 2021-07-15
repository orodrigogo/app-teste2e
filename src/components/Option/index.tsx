import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  active?: boolean;
}
export function Option({
  title,
  active,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={.8}
      style={[styles.container, active && styles.active]}
      {...rest}
    >
      <Text>
        {title}
      </Text>
    </TouchableOpacity>
  );
}