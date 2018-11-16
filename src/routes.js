import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'

import SearchTab from './pages/searchTab'
import FavoriteTab from './pages/favoriteTab'

export default createMaterialTopTabNavigator ({
    Search: {screen: SearchTab},
    Favorites: {screen: FavoriteTab}
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
        style: {
            backgroundColor: '#3450A8'
          },
          labelStyle: {
              fontWeight: 'bold'
          }
    }
})