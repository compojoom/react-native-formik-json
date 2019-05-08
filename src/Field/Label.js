import React from 'react';
import {View, Text} from 'react-native'

const Label = ({ children, ...attributes }) => {
  if(children) {
    return (
      <View><Text>{children}</Text></View>
    )
  }

  return null
}

export default React.memo(Label);
