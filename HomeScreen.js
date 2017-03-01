import React from 'react';
import {
   StyleSheet,
  AppRegistry,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  Button,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import NavBar from './NavBar'
import ColorCard from './ColorCard'
import StartXY from './StartXY'
import EndXY from './EndXY'
import Locations from './Locations'
import { Card, CardSection, InputCard, ActionFieldHeading, ActionFieldInput, Spacing} from './common'
const { height, width } = Dimensions.get('window'); //store in state

export default class HomeScreen extends React.Component {

    static route = {
      navigationBar: {
         visible: true,
         borderBottomWidth: 0,
         elevation: 0,  //for Droid only
         renderBackground: (route) => {
            //console.log('route is', route);
              if (typeof route.params.color1 === 'undefined'
               || typeof route.params.color2 === 'undefined'
               || typeof route.params.color3 === 'undefined'
               || typeof route.params.startX === 'undefined'
               || typeof route.params.startY === 'undefined'
               || typeof route.params.endX === 'undefined'
               || typeof route.params.endY === 'undefined'
               || typeof route.params.location1 === 'undefined'
               || typeof route.params.location2 === 'undefined'
               || typeof route.params.location3 === 'undefined'
            ) {
               return '';
            }
            return (
               <NavBar
                  colors={[route.params.color1, route.params.color2]}
                  start={{x: route.params.startX, y: route.params.startY}}
                  end={{x:route.params.endX, y:route.params.endY}}
                  locations={[route.params.location1,route.params.location2, route.params.location3]}
               />
            )
         },
         borderBottomWidth: 0
      }
   }

   state = {
      color1: '#3A9FFF',
      color2: '#2FFFEC',
      color3: '#2FFFEC',
      startX: 0.1,
      startY: 0.6,
      endX: 0.7,
      endY: 1.1,
      location1: 0,
      location2: 1.5,
      location3: 0
   }

   constructor(props){
      super(props);

      this.onPress = this.onPress.bind(this)

      this.onChangeColor1 = this.onChangeColor1.bind(this)
      this.onChangeColor2 = this.onChangeColor2.bind(this)
      this.onChangeColor3 = this.onChangeColor3.bind(this)

      this.onChangeStartX = this.onChangeStartX.bind(this)
      this.onChangeStartY = this.onChangeStartY.bind(this)
      this.onChangeEndX = this.onChangeEndX.bind(this)
      this.onChangeEndY = this.onChangeEndY.bind(this)

      this.onChangeLocation1 = this.onChangeLocation1.bind(this)
      this.onChangeLocation2 = this.onChangeLocation2.bind(this)
      this.onChangeLocation3 = this.onChangeLocation3.bind(this)
   }

   componentDidMount() {
      console.log(this.props);
      this.props.navigator.updateCurrentRouteParams({
        color1: this.state.color1,
        color2: this.state.color2,
        color3: this.state.color3,
        startX: this.state.startX,
        startY: this.state.startY,
        endX: this.state.endX,
        endY: this.state.endY,
        location1: this.state.location1,
        location2: this.state.location2,
        location3: this.state.location3
      })
   }

   onChangeColor1(value) {
      this.setState({color1: value})
   }
   onChangeColor2(value) {
      this.setState({color2: value})
   }
   onChangeColor3(value) {
      this.setState({color3: value})
   }
   onChangeStartX(value) {
      if (value === '') {
         this.setState({startX: 0})
      } else {
         this.setState({startX: value})
      }
   }
   onChangeStartY(value) {
      if (value === '') {
         this.setState({startY: 0})
      } else {
         this.setState({startY: value})
      }
   }
   onChangeEndX(value) {
      if (value === '') {
         this.setState({endX: 0})
      } else {
         this.setState({endX: value})
      }
   }
   onChangeEndY(value) {
      if (value === '') {
         this.setState({endY: 0})
      } else {
         this.setState({endY: value})
      }
   }
   onChangeLocation1(value) {
      if (value === '') {
         this.setState({location1: 0})
      } else {
         this.setState({location1: value})
      }
   }
   onChangeLocation2(value) {
      if (value === '') {
         this.setState({location2: 0})
      } else {
         this.setState({location2: value})
      }
   }
   onChangeLocation3(value) {
      if (value === '') {
         this.setState({location3: 0})
      } else {
         this.setState({location3: value})
      }
   }

   onPress(){
      console.log(this.state);
      this.props.navigator.updateCurrentRouteParams({
         color1: this.state.color1,
         color2: this.state.color2,
         color3: this.state.color3,
         startX: parseFloat(this.state.startX),
         startY: parseFloat(this.state.startY),
         endX: parseFloat(this.state.endX),
         endY: parseFloat(this.state.endY),
         location1: parseFloat(this.state.location1),
         location2: parseFloat(this.state.location2),
         location3: parseFloat(this.state.location3)
      })
   }

  render() {

    return (
      <View style={{marginTop: 20, flex: 1}}>

         <ColorCard
            onChangeColor1={this.onChangeColor1}
            onChangeColor2={this.onChangeColor2}
            onChangeColor3={this.onChangeColor3}
         />

         <Spacing height={15} />

         <StartXY
            onChangeStartX={this.onChangeStartX}
            onChangeStartY={this.onChangeStartY}
         />

         <Spacing height={15} />

         <EndXY
            onChangeEndX={this.onChangeEndX}
            onChangeEndY={this.onChangeEndY}
         />

         <Spacing height={15} />

         <Locations
            onChangeLocation1={this.onChangeLocation1}
            onChangeLocation2={this.onChangeLocation2}
            onChangeLocation3={this.onChangeLocation3}
         />


         <Spacing height={45} />

         <Button
            title='Try It'
            onPress={this.onPress}
         />

      </View>
    )
  }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,

   }
})
