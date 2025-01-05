import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// store
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@store/index';
import { bootstrapAsync } from '@store/auth-slice';

// screens
import { Login } from '@screens/login';
import { Home } from '@screens/home';
import { Settings } from '@screens/settings';
import { navigationStyles } from '@navigation/navigation.styled';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={navigationStyles}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export function Navigation() {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, userToken } = useSelector(
    (state: RootState) => state.auth,
  );

  useEffect(() => {
    dispatch(bootstrapAsync());
  }, [dispatch]);

  if (isLoading) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userToken == null ? (
          <Stack.Screen
            name="SignIn"
            component={Login}
            options={{ title: 'Sign in', headerShown: false }}
          />
        ) : (
          <Stack.Screen name="AuthStack" component={HomeTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
