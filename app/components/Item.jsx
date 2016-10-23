import {render} from 'react-dom'
import React from 'react';
import { themr } from 'react-css-themr';
import defaultTheme from './Item.scss';

const DefaultItem = ({theme}) => {
    return (
        <div className={theme.button} >
          Example item
        </div>
    )
};

export const Item = themr('Item', defaultTheme)(DefaultItem);