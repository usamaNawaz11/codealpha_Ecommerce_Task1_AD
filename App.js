import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Signup from "./Codealpha/Signup";
import Signin from "./Codealpha/Signin";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Codealpha/Home";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Sell from "./Codealpha/Sell";

const Stack = createStackNavigator();
const Tab=createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused ? 'home-outline' : 'home';
          } else if (route.name === 'sell') {
            iconName = focused ? 'cart-outline' : 'cart';
          } 

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'black',
      }}
    >
      <Tab.Screen name="home" component={Home} options={{headerShown:false}}/>
      <Tab.Screen name="sell" component={Sell} options={{headerShown:false}}/>

    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="signup" component={Signup} options={{headerShown:false}} />
          <Stack.Screen name="signin" component={Signin} options={{headerShown:false}} />
          <Stack.Screen name="home" component={HomeTabs} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
