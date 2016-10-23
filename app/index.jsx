import {render} from 'react-dom'
import React from 'react';
import {ThemeProvider} from 'react-css-themr';
import inlineCss from './page.scss';
import {Item} from './components/Item';

const contextTheme = {
    Item: require('./theme/ItemVendor.scss'),
};

render((
    <div>
        <Item />
        <ThemeProvider theme={contextTheme}>
            <Item />
        </ThemeProvider>
        <Item theme={inlineCss}/>
    </div>
), document.getElementById('app'));