import React, {Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator,createDrawerNavigator } from "react-navigation";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import Favorites from './screens/Favorites';
import User from './screens/User';
import Options from './screens/Options';

import colors from './utils/colors';

// const getTabBarIcon = icon => ({tintColor}) => (
//     <MaterialIcons name={icon} size={26} style={{color:tintColor}} />
// );

const getDrawerItemIcon = icon => ({tintColor}) => (
    <MaterialIcons 
        name={icon} size={22} style={{color:tintColor}}
    />
);



// const ContactsScreens = createStackNavigator(
//     {
//         Contacts: {
//             screen: Contacts
//         },
//         Profile: {
//             screen: Profile
//         }
//     },
//     {
//         initialRouteName: 'Contacts',
//         navigationOptions: {
//             tabBarIcon: getTabBarIcon('list')
//         }
//     }
// );

// const FavoritesScreens = createStackNavigator(
//     {
//         Favorites: {
//             screen: Favorites
//         },
//         Profile: {
//             screen: Profile
//         }
//     },
//     {
//         initialRouteName: 'Favorites',
//         navigationOptions: {
//             tabBarIcon: getTabBarIcon('star')
//         }
//     }
// );

// const UserScreens = createStackNavigator(
//     {
//         User: {
//             screen: User
//         },
//         Options: {
//             screen: Options
//         }
//     },
//     {
//         mode: 'modal',
//         initialRouteName: 'User',
//         navigationOptions: {
//             tabBarIcon: getTabBarIcon('person')
//         }
//     }
// );
const ContactsScreens = createStackNavigator(
    {
        Contacts: {
            screen: Contacts
        },
        Profile: {
            screen: Profile
        }
    },
    {
        initialRouteName: 'Contacts',
        navigationOptions: {
            drawerIcon: getDrawerItemIcon('list')
        }
    }
);

const FavoritesScreens = createStackNavigator(
    {
        Favorites: {
            screen: Favorites
        },
        Profile: {
            screen: Profile
        }
    },
    {
        initialRouteName: 'Favorites',
        navigationOptions: {
            drawerIcon: getDrawerItemIcon('star')
        }
    }
);

const UserScreens = createStackNavigator(
    {
        User: {
            screen: User
        },
        Options: {
            screen: Options
        }
    },
    {
        mode: 'modal',
        initialRouteName: 'User',
        navigationOptions: {
            drawerIcon: getDrawerItemIcon('person')
        }
    }
);

// const AppNavigator = createBottomTabNavigator(
//     {
//         Contacts: {
//             screen: ContactsScreens
//         },
//         Favorites: {
//             screen: FavoritesScreens
//         },
//         User: {
//             screen: UserScreens
//         }
//     },
//     {
//         initialRouteName: 'Contacts',
//         tabBarOptions: {
//             style: {
//                 backgroundColor: colors.greyLight
//             },
//             showLabel: false,
//             showIcon: true,
//             activeTintColor: colors.blue,
//             inactiveTintColor: colors.greyDark          
//         }
//     }
// );

const AppNavigator = createDrawerNavigator(
    {
        Contacts: {
            screen: ContactsScreens
        },
        Favorites: {
            screen: FavoritesScreens
        },
        User: {
            screen: UserScreens
        }
    },
    {
        initialRouteName: 'Contacts'
    }
);

export default createAppContainer(AppNavigator);