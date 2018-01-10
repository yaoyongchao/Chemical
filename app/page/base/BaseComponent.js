/**
 * Created by yaoyongchao on 17-12-18.
 * Description:
 */


import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class BaseComponent extends Component<{}> {
    constructor(props) {
        super(props)
    }

    fullName() {
        return 'tests'
    }
}