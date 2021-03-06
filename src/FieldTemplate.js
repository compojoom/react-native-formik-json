import React from 'react';
import {View} from 'react-native'
import Label from './Field/Label';
import ErrorMessage from './Field/ErrorMessage';

const styles = ( disabled ) => disabled ? { pointerEvents: 'none', opacity: 0.6 } : {};

const FieldTemplate = ({
    disabled = false,
    name,
    label,
    labelClass = '',
    formGroupClass = 'form-group',
    children
}) => (
  <View>
    {/*<div className={ formGroupClass } style={ styles(disabled) }>*/}
        { label && <Label htmlFor={ name } className={ labelClass }>{ label }</Label> }
        { children }
        {/*<ErrorMessage name={ name } />*/}
    {/*</div>*/}
  </View>
);

export default FieldTemplate;
