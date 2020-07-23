import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import colors from "../config/colors";
import constants from "../config/constants";

export default class DiscoverScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Discover Screen</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'center',
        backgroundColor: colors.defaultBgColor,
    },
})