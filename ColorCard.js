/* @flow weak */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
   Card,
   CardSection,
   InputCard,
   ActionFieldHeading,
   ActionFieldInput,
} from './common'


export default class ColorCard extends Component {
  render() {

    return (
      <Card>
         <CardSection style={{
            flexDirection:'row',
            justifyContent: 'space-between',
            // alignItems: 'flex-start',
         }}>
            <View>
               <ActionFieldHeading>
                  Color 1
               </ActionFieldHeading>
               <ActionFieldInput style={{
                  backgroundColor: "red",
                  borderRadius: 4,
                  width: 100,
                  fontSize: 20}}
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder='#3A9FFF'
                  onChangeText={this.props.onChangeColor1}/>
            </View>
            <View>
               <ActionFieldHeading>
                  Color 2
               </ActionFieldHeading>
               <ActionFieldInput style={{
                  backgroundColor: "#DBB100",
                  borderRadius: 4,
                  width: 100,
                  fontSize: 20}}
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder='#2FFFEC'
                  onChangeText={this.props.onChangeColor2}/>
            </View>
            <View>
               <ActionFieldHeading>
                  Color 3
               </ActionFieldHeading>
               <ActionFieldInput style={{
                  backgroundColor: "green",
                  borderRadius: 4,
                  width: 90,
                  fontSize: 20}}
                  autoCorrect={false}
                  autoCapitalize="none"
                  onChangeText={this.props.onChangeColor3}/>
            </View>

         </CardSection>
      </Card>
      );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
