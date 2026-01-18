import { Tabs } from 'expo-router';
import React from 'react';
import {MaterialCommunityIcons } from "@expo/vector-icons"


export default function TabLayout() {
 
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:"blue",
        headerShown: false,
        tabBarShowLabel: false,
  
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title:"Home",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons  size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons  size={28} name="magnify" color={color} />,
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="bell" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons  size={28} name="account" color={color} />,
        }}
      />
    </Tabs>
  );
}
