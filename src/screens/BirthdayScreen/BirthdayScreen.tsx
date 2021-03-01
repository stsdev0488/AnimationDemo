import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { BaseScreen } from '../../components/BaseScreen';
import { Button } from '../../components/Button';
import { CommonStyles, Typography } from '../../styles';

type ParamList = {
  BirthdayScreen: {
    name: string;
  };
};

export const BirthdayScreen = () => {
  const { params } = useRoute<RouteProp<ParamList, 'BirthdayScreen'>>();
  const { name } = params;
  const navigation = useNavigation();

  const [month, setMonth] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [year, setYear] = useState<string>('');

  const handleNextPress = () => {
    navigation.navigate('NumberScreen');
  };

  return (
    <BaseScreen>
      <View style={styles.container}>
        <Animatable.Text
          animation="bounceInRight"
          duration={600}
          style={styles.headerLabel}
        >
          {`Hey ${name}, when's your bday?`}
        </Animatable.Text>
        <Animatable.View
          animation="fadeInRight"
          duration={200}
          delay={400}
          easing="ease-in-out"
          style={styles.birthdayContainer}
        >
          <View style={styles.birthdayItem}>
            <Text style={styles.birthdayItemLabel}>Month</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="MM"
              value={month}
              onChangeText={setMonth}
              style={styles.textInput}
            />
          </View>
          <View style={styles.birthdayItem}>
            <Text style={styles.birthdayItemLabel}>Day</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="DD"
              value={day}
              onChangeText={setDay}
              style={styles.textInput}
            />
          </View>
          <View style={styles.birthdayItem}>
            <Text style={styles.birthdayItemLabel}>Year</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="YYYY"
              value={year}
              onChangeText={setYear}
              style={styles.textInput}
            />
          </View>
        </Animatable.View>
        <Animatable.View
          style={styles.footer}
          animation="fadeInUp"
          duration={200}
          delay={500}
        >
          <Text style={styles.birthdayExample}>e.g. 11/17/2006</Text>
          <View style={styles.footerButtonWrapper}>
            <Button icon="arrow-right" onPress={handleNextPress} />
          </View>
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
  birthdayExample: {
    fontSize: 18,
    color: '#142b8d',
    paddingBottom: 7,
  },
  birthdayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  birthdayItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  birthdayItemLabel: {
    fontSize: 18,
    color: '#066dc0',
    fontWeight: '600',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
});
