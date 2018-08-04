import React from "react";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import { Ionicons, Entypo } from "@expo/vector-icons";

import EditProfile from "./screen/EditProfile";
import Home from "./screen/Home";
import Payment from "./screen/Payment";
import History from "./screen/History";
import Refer from "./screen/Refer";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";

// Register each screens in individual stack navigators
const HomeScreenStackNavigator = createStackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      header: (
        <Header navigation={navigation} title={"Intrust"}>
          <Entypo name="menu" size={30} />
        </Header>
      )
    })
  }
});

const EditProfileScreenStackNavigator = createStackNavigator({
  EditProfileScreen: {
    screen: EditProfile,
    navigationOptions: ({ navigation }) => ({
      header: (
        <Header
          navigation={navigation}
          navigateToScreen={"HomeScreen"}
          title={"My Account"}
        >
          <Ionicons name="md-arrow-round-back" size={30} />
        </Header>
      )
    })
  }
});

const PaymentScreenStackNavigator = createStackNavigator({
  PaymentScreen: {
    screen: Payment,
    navigationOptions: ({ navigation }) => ({
      header: (
        <Header
          navigation={navigation}
          navigateToScreen={"HomeScreen"}
          title={"My Account"}
        >
          <Ionicons name="md-arrow-round-back" size={30} />
        </Header>
      )
    })
  }
});

const HistoryScreenStackNavigator = createStackNavigator({
  HistoryScreen: {
    screen: History,
    navigationOptions: ({ navigation }) => ({
      header: (
        <Header
          navigation={navigation}
          navigateToScreen={"HomeScreen"}
          title={"My Account"}
        >
          <Ionicons name="md-arrow-round-back" size={30} />
        </Header>
      )
    })
  }
});

const ReferScreenStackNavigator = createStackNavigator({
  ReferScreen: {
    screen: Refer,
    navigationOptions: ({ navigation }) => ({
      header: (
        <Header
          navigation={navigation}
          navigateToScreen={"HomeScreen"}
          title={"My Account"}
        >
          <Ionicons name="md-arrow-round-back" size={30} />
        </Header>
      )
    })
  }
});

// Register individual stack navigator in drawer navigator
const DrawerNavigation = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreenStackNavigator
    },
    EditProfileScreen: {
      screen: EditProfileScreenStackNavigator
    },
    PaymentScreen: {
      screen: PaymentScreenStackNavigator
    },
    HistoryScreen: {
      screen: HistoryScreenStackNavigator
    },
    ReferScreen: {
      screen: ReferScreenStackNavigator
    }
  },
  {
    contentComponent: SideMenu
  }
);

export default DrawerNavigation;
