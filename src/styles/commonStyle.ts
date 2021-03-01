import { TextStyle, ViewStyle } from 'react-native';

export const textInput: TextStyle = {
  color: '#FFFFFF',
  textAlign: 'center',
  fontSize: 23,
  fontWeight: '900',
};

export const screenContainer: ViewStyle = {
  flex: 1,
  justifyContent: 'space-between',
};

export const footer: ViewStyle = {
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 15,
};

export const footerButtonWrapper: ViewStyle = {
  position: 'absolute',
  bottom: 0,
  right: 0,
};
