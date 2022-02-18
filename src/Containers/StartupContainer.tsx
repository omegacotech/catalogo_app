import React, { useEffect } from 'react'
import { View } from 'react-native'
import { ActivityIndicator, Text } from 'react-native-paper'
import { Brand } from '@/Components'
import { navigateAndSimpleReset } from '@/Navigators/utils'

const StartupContainer = () => {

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 2000),
    )

    navigateAndSimpleReset('Main')
  }

  useEffect(() => {
    init()
  })

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)'
    }}>
      <Brand />
      <ActivityIndicator 
        size={'large'} 
        style={{
          marginVertical: 20
        }} 
      />
      <Text 
        style={{
          fontSize: 16,
          fontWeight: '700'
        }}
      >
        Bem-vindo ao App Catálogo Teste
      </Text>
    </View>
  )
}

export default StartupContainer
