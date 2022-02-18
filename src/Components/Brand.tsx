import React from 'react'
import { View, Image } from 'react-native'

interface Props {
  height?: number | string
  width?: number | string
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center'
}

const Brand = ({ height, width, mode }: Props) => {

  return (
    <View style={{ height, width }}>
      <Image style={{height, width}} source={require('../Assets/Images/TOM.png')} resizeMode={mode} />
    </View>
  )
}

Brand.defaultProps = {
  height: 200,
  mode: 'contain',
  width: 200,
}

export default Brand
