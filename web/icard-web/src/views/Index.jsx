import Home from "./Home";
import MyICardView from "./MyICardView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenOption from "../utilites/ScreenOption";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import RegistrationView from "./RegistrationView";
import VendorView from "./VendorView";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Index() {
  const { user, setUser } = useContext(AuthContext);

  const LogIn = () => {
    return (
      <Tab.Navigator screenOptions={ScreenOption}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Vendors" component={VendorView} />
        <Tab.Screen name="My ICard" component={RegistrationView} />
      </Tab.Navigator>
    );
  };
  const Tabs = () => {
    return (
      <Tab.Navigator screenOptions={ScreenOption}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Vendors" component={VendorView} />
        <Tab.Screen name="My ICard" component={MyICardView} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ScreenOption}>
        <Stack.Screen name="Tabs" component={user ? Tabs : LogIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
