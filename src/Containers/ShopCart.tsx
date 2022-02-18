import React from 'react'
import {
  View,
  FlatList,
  Image
} from 'react-native'
import {
 TouchableRipple,
 Button,
 TextInput,
 Text
} from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { store } from '@/Store'

import { 
  Product, 
  ShopCartState, 
  increment, 
  decrement, 
  shopCartSelector 
} from '@/Store/ShopCart'

type RenderProps = {
  item: Product,
}


const ExampleContainer = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const cartSelector = useSelector(shopCartSelector)
  
  const [values, setValues] = React.useState()

  React.useEffect(() => {
    console.log('cartSelector: ', cartSelector)
    let state = store.getState()
    let shopCart = state.shopCart
    setValues(shopCart)
  }, [values])

  const handleSubmit = () => {
    dispatch(addProduct(values))
    return navigation.goBack()
  }

  const renderItem = ({ item }: RenderProps) => (
    
    <View
      style={{
        marginBottom: 10,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
      }}
    >
      <View
        style={{
          flexDirection: 'row'
        }}
      >
        <Image 
          source={require('../Assets/Images/TOM.png')}
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Button 
            onPress={() => dispatch(decrement(item))}
          > 
            - 
          </Button>
          
          <TextInput 
            disabled
            mode='outlined'
            style={{
              height: 40,
              textAlign: 'center'
            }}
            value={item.amount?.toString()}
          />
          <Button 
            onPress={() => dispatch(increment(item))}
          > 
            + 
          </Button>
        </View>
      </View>
      
    </View>
    
  )

  const renderShopCartData = (data: ShopCartState) => {
    let totalItems = data?.totalItems ? data?.totalItems : 0
    let total = data?.total ? data?.total : 0
    
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              fontWeight: '800'
            }}
          >
            Total
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '800'
            }}
          >
            R$ {total.toFixed(2)}
          </Text>
        </View>
        <Button

        >
          ENVIAR PEDIDO
        </Button>
      </View>
    )
  }

  return (
    <View
      style={{
        flex: 1,        
        backgroundColor: 'rgba(0,0,0,0.2)'
      }}
    >
      <FlatList 
        style={{
          flexGrow: 1,
          // height: '100%',
        }}
        contentContainerStyle={{
          padding: 15
        }}
        data={cartSelector?.data}
        renderItem={renderItem}
        keyExtractor={ item => item.id.toString() }
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          // height: '20%',
          padding: 15,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            marginBottom: 5
          }}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              fontWeight: '800'
            }}
          >
            Total
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '800'
            }}
          >
            R$ {cartSelector.total.toFixed(2)}
          </Text>
        </View>
        <Button
          mode='contained'
          style={{
            width: '100%'
          }}
          onPress={() => navigation.navigate('Concluido')}
        >
          ENVIAR PEDIDO
        </Button>
      </View>
    </View>
  )
}

export default ExampleContainer
