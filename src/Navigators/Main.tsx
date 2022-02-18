import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Catalog, Product, ShopCart, Conclued } from '@/Containers'

const Stack = createStackNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Catalogo'
    >
      <Stack.Screen
        name="Catalogo"
        component={Catalog}
        options={{
          title: 'Catálogo',
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen
        name="Produto"
        component={Product}
        options={ ({ route }) => ({
          title: route.params?.item.name,
          headerTitleAlign: 'center'
        })}
      />
      <Stack.Screen
        name="Carrinho"
        component={ShopCart}
        options={{
          title: 'Carrinho',
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen
        name="Concluido"
        component={Conclued}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator
