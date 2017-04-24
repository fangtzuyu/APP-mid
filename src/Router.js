import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Searchlist from './components/Searchlist';
import Search from './components/Search';
import Details from './components/Details';
import Me from './components/Me';
import Add from './components/Add';
import Maps from './components/Maps';

export const SearchStack = StackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      header: () => ({
        title: 'Search',
      })
    },
  },
  Searchlist: {
    screen: Searchlist,
    navigationOptions: {
      header: () => ({
        title: 'Search Result',
      })
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      header: ({ state }) => ({
        title: `${state.params.company.toUpperCase()}`,
      })
    },
  },
  Maps: {
    screen: Maps,
    navigationOptions: {
      header: () => ({
        title: 'Map',
      })
    },
  },
});

export const MeStack = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      header: () => ({
        title: 'ME',
      })
    },
  },
},
{
  // headerMode: 'none',
}
);
export const AddStack = StackNavigator({
  Add: {
    screen: Add,
    navigationOptions: {
      header: () => ({
        title: 'Add/Delete',
      })
    },
  },
},
{
  // headerMode: 'none',
}
);


export const TabRouter = TabNavigator(
  {
    Search: {
      screen: SearchStack,
      navigationOptions: {
        tabBar: {
          label: 'Search',
          icon: ({ tintColor }) => <Icon name="search" size={35} color={tintColor} />
        },
      },
    },
    MeStack: {
      screen: MeStack,
      navigationOptions: {
        tabBar: {
          label: 'Me',
          icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
        },
      },
    },
    AddStack: {
      screen: AddStack,
      navigationOptions: {
        tabBar: {
          label: 'Add/Delete',
          icon: ({ tintColor }) => <Icon name="business" size={35} color={tintColor} />
        },
      },
    },
  },
);
