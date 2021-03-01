import React from 'react';
import {
  StyleSheet,
  ViewStyle,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Progress from 'react-native-progress';

interface Props {
  icon: string;
  iconColor?: string;
  iconSize?: number;
  label?: string;
  onPress?: () => void;
  loading?: boolean;
  style?: ViewStyle;
}

export const Button: React.FC<Props> = ({
  icon,
  iconColor,
  iconSize,
  label,
  onPress,
  loading,
  style,
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      {loading ? (
        <Progress.CircleSnail size={20} />
      ) : (
        <View>
          <Icon
            name={icon}
            size={iconSize || 20}
            color={iconColor || '#FFFFFF'}
          />
          {label ? <Text style={styles.label}>{label}</Text> : null}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff0096',
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
});
