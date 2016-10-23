import {render} from 'react-dom'
import React from 'react';
import { themr } from 'react-css-themr';
import defaultTheme from './Item.scss';

const Button = ({theme}) => {
    return (
        <div className={theme.button} >
          11 lkdsflk
        </div>
    )
};

export const Item = themr('Item', defaultTheme)(Button);