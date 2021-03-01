import React, { useState, useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import PhoneInput from 'react-native-phone-input';
import { Alert, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BaseScreen } from '../../components/BaseScreen';
import { Button } from '../../components/Button';
import { CommonStyles, Typography } from '../../styles';

export const NumberScreen = () => {
  const navigation = useNavigation();
  const [number, setNumber] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const handleNextPress = () => {
    setLoading(true);
    Alert.alert(`Cool, I'm texting a code to this number: +${number}`, '', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('VerifyScreen', { number }),
      },
    ]);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  return (
    <BaseScreen>
      <View style={styles.container}>
        <Animatable.Text
          style={styles.headerLabel}
          animation="bounceInRight"
          duration={600}
        >
          I need your phone number to identify you.
        </Animatable.Text>
        <Animatable.View
          animation="fadeInRight"
          duration={200}
          delay={400}
          easing="ease-in-out"
          style={styles.numberContainer}
        >
          <PhoneInput
            value={number}
            initialCountry="us"
            onChangePhoneNumber={setNumber}
            textStyle={styles.textInput}
          />
        </Animatable.View>
        <View style={styles.footer}>
          <Animatable.View
            style={styles.footerButtonWrapper}
            animation="fadeInUp"
            duration={200}
            delay={500}
          >
            <Button
              icon="arrow-right"
              onPress={handleNextPress}
              loading={loading}
            />
          </Animatable.View>
        </View>
      </View>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.screenContainer,
  },
  headerLabel: {
    ...Typography.headerLabel,
  },
  footer: {
    ...CommonStyles.footer,
  },
  footerButtonWrapper: {
    ...CommonStyles.footerButtonWrapper,
  },
  textInput: {
    ...CommonStyles.textInput,
    textAlign: 'left',
  },
  numberContainer: {
    paddingHorizontal: 20,
  },
});
