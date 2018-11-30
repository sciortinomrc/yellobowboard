import React, { Component } from 'react'
import {
      createStackNavigator,
      createDrawerNavigator,
      createBottomTabNavigator,
      createSwitchNavigator
    } from 'react-navigation';
import CategoryContainer from '../views/CategoryContainer';
import DetailCategory  from '../views/DetailCategory';
import Icon from 'react-native-vector-icons/Ionicons'
import ListCategory from '../views/ListCategory';
import ProfileScreen from '../views/ProfileScreen'
import Notification from '../views/Notification'
import DrawerComponent from './DrawerComponent'
import Landing from '../views/Landing';
import Login from '../views/Login';
export default class Route extends Component {
  render() {
    return (
      <AppSwitchNavigator/>
    )
  }
}
const AppBottomNavigator = createBottomTabNavigator(
  {
    Home:{
          screen:ListCategory,
          navigationOptions:{
            tabBarLabel:'Home',
            tabBarIcon:({tintColor})=>(
              <Icon name="ios-home" size={24} color={tintColor}/>
            )
          }
        },  
    Category:{
          screen:CategoryContainer,
          navigationOptions:{
            tabBarLabel:'Category',
            tabBarIcon:({tintColor})=>(
              <Icon name="ios-cube" size={24} color={tintColor}/>
            )
          }
        },
    Notifications:{
        screen:Notification,
        navigationOptions:{
          header:true,
          tabBarLabel:'Notification',
          tabBarIcon:({tintColor})=>(
            <Icon name="ios-notifications" size={24} color={tintColor}/>
          )
        }
      },    
    Profile:{
          screen:ProfileScreen,
          navigationOptions:{
            tabBarLabel:'Profile',
            tabBarIcon:({tintColor})=>(
              <Icon name="ios-person" size={24} color={tintColor}/>
            )
          }
    },     
  },
  {
    navigationOptions:{
    tabBarOptions: {
      activeTintColor: '#FFFF4E',
      inactiveTintColor: '#FFFFFF',
      style:{
        backgroundColor: "#093D37"
      },
    },
  }
  }
)

const AppStackNavigator = createStackNavigator(
  {
      Home:CategoryContainer,
      Main:{
        screen:AppBottomNavigator,
        navigationOptions:{
          header:null
        }
      },
      Detail:DetailCategory,
  }
)

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home:AppStackNavigator,
  },
  {
    contentComponent:DrawerComponent
  }
  )

const AppSwitchNavigator = createSwitchNavigator(
  {
    AuthLoading:Landing,
    Login:Login,
    App:AppDrawerNavigator
  }
)