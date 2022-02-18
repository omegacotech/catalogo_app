import React from 'react'
import {
  View,
} from 'react-native'
import {
  Text,
} from 'react-native-paper'


const Conclued = () => {

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',    
        padding: 15,    
        backgroundColor: 'rgba(0,0,0,0.2)'
      }}
    >
      <Text
        style={{
          flexWrap: 'wrap',
          fontSize: 18,
          fontWeight: '600',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        Pedido realizado com sucesso
      </Text>
    </View>
  )
}

export default Conclued
