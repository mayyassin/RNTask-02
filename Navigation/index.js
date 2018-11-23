import { createStackNavigator } from "react-navigation";
import React from "react";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";
import Login from "../Components/Login";

const StackNavigator = createStackNavigator(
  {
    List: CoffeeList,
    Detail: CoffeeDetail,
    Cart: CoffeeCart,
    Login: Login
  },
  {
    initialRouteName: "Login",
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "transparent"
      },
      headerTextStyle: {
        fontWeight: "bold"
      },
      cardStyle: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default StackNavigator;
