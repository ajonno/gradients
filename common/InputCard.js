import React, { PropTypes } from 'react';
import { TextInput, View, Text, Image } from 'react-native';
import { Spacing, Card, CardSection, ActionFieldHeading, ActionFieldInput } from '../common';
import renderIf from '../utils/renderIf';

import { stylesCommon } from '../StylesCommon';

const propTypes = {
  heading: PropTypes.string.isRequired,
};

const InputCard = ({emailValid, style, heading, placeholder, onChangeText, secureTextEntry, autoCorrect }) => {

  return (
   <Card style={[stylesCommon.shadow]}>
      <CardSection style={styles.cardSection}>
         <ActionFieldHeading
            style={stylesCommon.textFieldLabel}
         >
            {heading}
         </ActionFieldHeading>
         <View style={{flexDirection: 'row'}}>
            <ActionFieldInput
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={[stylesCommon.textField, style]}
                autoCorrect={autoCorrect}
            />
            <Spacing width={20} />
         </View>

      </CardSection>
   </Card>
  );
};

const styles = {
   cardSection: {
      flexDirection: 'column',
      paddingTop: 10,
      paddingBottom: 10
   }
};

InputCard.propTypes = propTypes;
export { InputCard };
