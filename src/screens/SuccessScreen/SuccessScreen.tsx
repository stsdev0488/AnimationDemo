import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export const SuccessScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/success-anim.json')}
        autoPlay
        loop={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01bafe',
  },
});
