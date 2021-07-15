import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Your Plan
      </Text>

      <View style={styles.button}>
        <Text style={styles.subtitle}>
          Change
        </Text>
        <Feather
          name="arrow-right"
          size={24}
        />
      </View>
    </View>
  );
}