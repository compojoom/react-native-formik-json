import { registerField } from '../registry';

import Text from './Text';

[
    'text',
    'email',
    'password',
    'number',
    'url',
    'date'
].map(( type ) => registerField(type, Text));
