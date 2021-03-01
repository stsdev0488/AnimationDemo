import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BaseScreen } from '../../components/BaseScreen';
import { Button } from '../../components/Button';
import { CommonStyles, Typography } from '../../styles';

export const NameScreen: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>("RoryO'Reilly");

  const handleNextPress = () => {
    navigation.navigate('BirthdayScreen', {
      name,
    });
  };

  return (
    <BaseScreen>
      <View style={styles.container}>
        <Animatable.View animation="bounceInRight" duration={600}>
          <Text style={styles.headerLabel}>Hi</Text>
          <Text style={styles.headerLabel}>What's your name</Text>
        </Animatable.View>
        <Animatable.View
          animation="fadeInRight"
          duration={200}
          delay={400}
          easing="ease-in-out"
        >
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.textInput}
          />
        </Animatable.View>
        <View style={styles.footer}>
          <Animatable.View
            style={styles.footerButtonWrapper}
            animation="fadeInUp"
            duration={200}
            delay={500}
          >
            <Button icon="arrow-right" onPress={handleNextPress} />
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
  },
});
