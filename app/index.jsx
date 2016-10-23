import {render} from 'react-dom'
import React from 'react';
import {Provider} from 'react-redux';
import {AppBar, Checkbox, IconButton} from 'react-toolbox';
import {Layout, NavDrawer, Panel, Sidebar, Dropdown} from 'react-toolbox';
import 'react-toolbox/lib/commons.scss';
import {Page} from './Page';


render((
    <Page />
), document.getElementById('app'));
