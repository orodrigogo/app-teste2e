import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Option } from '../../components/Option';
import { Button } from '../../components/Button';
import { PlanInfo, PlanInfoProps } from '../../components/PlanInfo';

import { styles } from './styles';

export function Plan() {
  const [plan, setPlan] = useState<PlanInfoProps>({ name: 'Basic', value: '5.25' });
  const [emailSent, setEmailSent] = useState(false);

  function handleChangePlan(plan: string) {
    if (plan === 'basic') {
      setPlan({
        name: 'Basic',
        value: '5.25'
      });
    } else {
      setPlan({
        name: 'Premium',
        value: '6.99'
      });
    }
  }

  function handleSubscribe() {
    setEmailSent(true);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} testID="keyboard">
      <View style={styles.container}>
        <Header />

        <PlanInfo
          name={plan.name}
          value={plan.value}
        />

        <View style={styles.options}>
          <Option
            title="Premium"
            active={plan.name === 'Premium'}
            onPress={() => handleChangePlan('premium')}
            testID="option-premium"
          />
          <Option
            title="Basic"
            active={plan.name === 'Basic'}
            onPress={() => handleChangePlan('basic')}
          />
        </View>

        <Input
          placeholder="your email"
          testID="input-email"
        />

        {
          emailSent &&
          <Text style={styles.confirmation} testID="confirmation-message">
            We send you a  {'\n'}
            confirmation email.
          </Text>
        }

        <Button
          title="Subscribe"
          onPress={handleSubscribe}
          testID="button-subscribe"
        />

        <Text style={styles.details} testID="plan-note">
          If the price changes, we'll notify you beforehand.
          You cam check your renewal date or cancel anytime via your Account page.
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}