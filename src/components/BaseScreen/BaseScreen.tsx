import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  children?: React.ReactNode;
}

export const BaseScreen: React.FC<Props> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.innerWrapper}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01bafe',
  },
  innerWrapper: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
