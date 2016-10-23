import {render} from 'react-dom'
import React from 'react';
import {ThemeProvider} from 'react-css-themr';
import inlineCss from './page.scss';

const contextTheme = {
    Item: require('./theme/ItemVendor.scss'),
};

export const Page = () => {
    return (
        <div>
            <Item />
            <ThemeProvider theme={contextTheme}>
                <Item />
            </ThemeProvider>
            <Item theme={inlineCss}/>
        </div>
    )
};

