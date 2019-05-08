import React from 'react';
import {View, Text} from 'react-native'

import { connect } from 'formik';
import { getError } from '../utils';

class ErrorMessage extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { name, formik } = this.props;
        const currentError = getError(name, formik);
        const nextError = getError(name, nextProps.formik);

        return currentError !== nextError;
    }

    render() {
        const { name, formik } = this.props;
        const error = getError(name, formik);
        return error && <View><Text>{ error }</Text></View>;
    }
}

export default connect(ErrorMessage);
