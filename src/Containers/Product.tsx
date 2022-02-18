import React, { useState, useEffect } from 'react'
import {
  View,
  ScrollView,
  Image,
  useWindowDimensions
} from 'react-native'
import {
  Text,
  TextInput,
  Button
} from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Product, addProduct } from '@/Store/ShopCart'

const ExampleContainer = () => {
  const { width } = useWindowDimensions()
  const navigation = useNavigation()
  const route = useRoute()
  const dispatch = useDispatch()

  const [values, setValues] = React.useState<Product>()

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (typeof route.params !== undefined) {
        let { item } = route.params
        item.amount = 1
        setValues(item)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const increment = () => {
    let amount = values?.amount
    amount++
    setValues({
      ...values,
      amount
    })
  }

  const decrement = () => {
    let amount = values?.amount
    amount--
    setValues({
      ...values,
      amount
    })
  }

  const handleSubmit = () => {
    dispatch(addProduct(values))
    return navigation.goBack()
  }

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 15
      }}
      style={{
        flexGrow: 1,
        backgroundColor: 'rgba(0,0,0,.2)'
      }}
    >
      {
        values
          ? (
            <>
              <View
                style={{
                  alignSelf: 'center',
                }}
              >
                <Image 
                  source={values.image}
                  style={{
                    resizeMode: 'contain',
                    width: (width * .8),
                    height: 200,
                  }}
                />
              </View>
              <Text
                style={{
                  marginVertical: 20,
                  fontSize: 16,
                }}
              >
                {values.description}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700'
                }}
              >
                R$ {values.price}
              </Text>
              <View
                style={{
                  marginVertical: 15
                }}
              >
                <TextInput 
                  mode='outlined'
                  label='Observações'
                  multiline={true}
                  style={{
                    maxHeight: 120
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',

                  }}
                >
                  <Button onPress={() => decrement()}> - </Button>
                  <TextInput 
                    mode='outlined'
                    disabled
                    style={{
                      height: 40,
                      textAlign: 'center'
                    }}
                    value={values.amount?.toString()}
                  />
                  <Button onPress={() => increment()}> + </Button>
                </View>
                <Button
                  mode='contained'
                  onPress={handleSubmit}
                >
                  Adicionar
                </Button>
              </View>
            </>
          ) : null
      }
    </ScrollView>
  )
}

export default ExampleContainer
