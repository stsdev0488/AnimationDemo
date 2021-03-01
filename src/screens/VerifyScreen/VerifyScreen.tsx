import React from 'react';
import * as Animatable from 'react-native-animatable';
import CodeInput from 'react-native-confirmation-code-input';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { BaseScreen } from '../../components/BaseScreen';
import { Button } from '../../components/Button';
import { CommonStyles, Typography } from '../../styles';

type ParamList = {
  VerifyScreen: {
    number: string;
  };
};

export const VerifyScreen = () => {
  const { params } = useRoute<RouteProp<ParamList, 'VerifyScreen'>>();
  const { number } = params;
  const navigation = useNavigation();

  return (
    <BaseScreen>
      <View style={styles.container}>
        <Animatable.View animation="bounceInRight" duration={600}>
          <View>
            <Text style={styles.headerLabel}>Enter Code</Text>
            <Text style={styles.headerSubLabel}>{`Sent to ${number}`}</Text>
          </View>
        </Animatable.View>
        <View>
          <CodeInput
            codeLength={4}
            compareWithCode="1234"
            className="border-circle"
            inactiveColor="#142b8d"
            space={10}
            size={30}
            inputPosition="center"
            onFulfill={(code: any) => {
              if (code === true) {
                navigation.navigate('SuccessScreen');
              }
            }}
          />
        </View>
        <Animatable.View
          style={styles.footer}
          animation="fadeInUp"
          duration={200}
          delay={500}
        >
          <View style={styles.footerButtonWrapper}>
            <Button icon="arrow-right" />
          </View>
          <View style={styles.footerBackButtonWrapper}>
            <Button
              icon="arrow-left"
              iconColor="#142b8d"
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            />
          </View>
          <Text style={styles.resetLabel}>
            You can ask for a new code in 36 seconds buddy
          </Text>
        </Animatable.View>
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
  },
  footerBackButtonWrapper: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  backButton: {
    backgroundColor: '#142b8d33',
  },
  resetLabel: {
    fontSize: 18,
    color: '#142b8d',
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 80,
  },
  headerSubLabel: {
    fontSize: 18,
    color: '#142b8d',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginTop: 10,
  },
});
