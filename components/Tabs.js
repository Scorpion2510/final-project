import React from "react";
import { createAppContainer, createBottomTabNavigator} from "react-navigation";
import { Icon } from 'react-native-elements';
import test from "./test";
import home from "./home";
import student from "./student";
// home
// call
// people
// code
// person
const tabs = createBottomTabNavigator({
  Home:  {
        screen: home,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="home"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },

    

    Student:  {
        screen: student,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="person"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },


    Projects:  {
        screen: test,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="code"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },


    "Staff&Instructors":  {
        screen: test,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="people"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },

    Contact:  {
        screen: home,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="call"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
});

const Tabs = createAppContainer(tabs);

export default Tabs;
