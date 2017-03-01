/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Card, CardSection, InputCard, ActionFieldHeading, ActionFieldInput} from './common'


const Locations = (props) => (
   <Card>
      <CardSection style={{
         flexDirection:'row',
         justifyContent: 'space-between',
         // alignItems: 'flex-start',

      }}>
         <View>
            <ActionFieldHeading>
               Location 1
            </ActionFieldHeading>
            <ActionFieldInput style={{
               backgroundColor: "red",
               borderRadius: 4,
               width: 80,
               fontSize: 22}}
               autoCorrect={false}
               autoCapitalize="none"
               placeholder='0'
               onChangeText={props.onChangeLocation1}
            />
         </View>
         <View>
            <ActionFieldHeading>
               Location 2
            </ActionFieldHeading>
            <ActionFieldInput style={{
               backgroundColor: "#DBB900",
               borderRadius: 4,
               width: 80,
               fontSize: 22}}
               autoCorrect={false}
               autoCapitalize="none"
               placeholder='1.5'
               onChangeText={props.onChangeLocation2}
            />
         </View>
         <View>
            <ActionFieldHeading>
               Location 3
            </ActionFieldHeading>
            <ActionFieldInput style={{
               backgroundColor: "green",
               borderRadius: 4,
               width: 80,
               fontSize: 22}}
               autoCorrect={false}
               autoCapitalize="none"
               onChangeText={props.onChangeLocation3}
            />
         </View>

      </CardSection>
   </Card>
);

export default Locations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
