import React from 'react'
import {
  View,
  FlatList,
  Image
} from 'react-native'
import {
  Text,
  TouchableRipple
} from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { store } from '@/Store'

import { Product, ShopCartState } from '@/Store/ShopCart'
import { useNavigation } from '@react-navigation/native'

type RenderProps = {
  item: Product,
}

const products = [
  {
    id: 1,
    name: 'Produto 1',
    price: 9.99,
    image: require('../Assets/Images/TOM.png'),
    description: 'lorem ipsun dolor set'
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 9.99,
    image: require('../Assets/Images/TOM.png'),
    description: 'lorem ipsun dolor set'
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 9.99,
    image: require('../Assets/Images/TOM.png'),
    description: 'lorem ipsun dolor set'
  },
  {
    id: 4,
    name: 'Produto 4',
    price: 9.99,
    image: require('../Assets/Images/TOM.png'),
    description: 'lorem ipsun dolor set'
  },
  {
    id: 5,
    name: 'Produto 5',
    price: 9.99,
    image: require('../Assets/Images/TOM.png'),
    description: 'lorem ipsun dolor set'
  },
  {
    id: 6,
    name: 'Produto 6',
    price: 9.99,
    image: require('../Assets/Images/TOM.png'),
    description: 'lorem ipsun dolor set'
  },
  {
    id: 7,
    name: 'Produto 7',
    price: 9.99,
    image: require('../Assets/Images/TOM.png'),
    description: 'lorem ipsun dolor set'
  },
]

const ExampleContainer = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  
  const [values, setValues] = React.useState<Product[]>()

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      let { shopCart } = store.getState()
      setValues(shopCart)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const renderItem = ({ item }: RenderProps) => (
    
    <TouchableRipple
      style={{
        marginBottom: 10,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
      }}
      onPress={() => navigation.navigate('Produto', { item })}
      rippleColor="rgba(0,0,0,.32)"
    >
      <View
        style={{
          flexDirection: 'row'
        }}
      >
        <Image 
          source={item.image}
          style={{
            width: 50,
            height: 50,
            resizeMode: 'contain',
            marginRight: 10
          }}
        />
        <View
          style={{
            flexDirection: 'column'
          }}
        >
          <Text
            style={{
              flex: 1,
            }}
          >
            {item.name}
          </Text>
          <Text>
            R$ {item.price}
          </Text>
        </View>
      </View>
      
    </TouchableRipple>
    
  )

  const renderShopCartData = (data: ShopCartState) => {
    let totalItems = data?.totalItems ? data?.totalItems : 0
    let total = data?.total ? data?.total : 0
    
    return (
      <View>
        <Text>{totalItems} PRODUTOS, CARRINHO R$ {total}</Text>
      </View>
    )
  }

  return (
    <View>
      <FlatList 
        style={{
          height: '90%',
          backgroundColor: 'rgba(0,0,0,0.2)'
        }}
        contentContainerStyle={{
          padding: 15
        }}
        data={products}
        renderItem={renderItem}
        keyExtractor={ item => item.id.toString() }
      />
      <TouchableRipple
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '10%',
          padding: 10,
          backgroundColor: '#FFFFFF',
        }}
        onPress={() => navigation.navigate('Carrinho')}
        rippleColor="rgba(0,0,0,.32)"
      >
        {renderShopCartData(values)}
      </TouchableRipple>
    </View>
  )
}

export default ExampleContainer
