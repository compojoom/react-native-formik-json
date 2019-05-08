import React from 'react';
import {TextInput} from 'react-native'
import { changeHandler } from '../utils';

const Text = ({ config, formik, value = '', error }) => {
  const {
    name,
    type,
    attributes,
    fieldType,
    defaultValue,
    icon,
    fieldClass = 'form-control',
    inputGroupClass = 'input-group'
  } = config;

  const { handleChange, handleBlur } = formik;
  const isInputGroup = icon ? true : false;

  const errorStyle = error ? {borderColor: 'red'} : {}

  return <TextInput style={{height: 30, borderWidth: 1, borderColor: '#000', ...errorStyle}}
                    value={value}
                    onChangeText={(text) => {

                      console.log('value changes', text)
                      changeHandler.bind(this, handleChange(name), formik, config)(text)

                    }}/>

}
export default React.memo(Text);
