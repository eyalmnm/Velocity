import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, ActivityIndicator } from 'react-native';
import colors from "../config/colors";
import constants from "../config/constants";

export default class DiscoverScreen extends Component {

    state = {
        isLoading: false,
        activitiesList: [],
    }

    async componentDidMount() {
        try {
            this.setState({ isLoading: true })
            const activitiesApiCall = await fetch(constants.serverUrl);
            const apiResponse = await activitiesApiCall.json();
            this.setState({ activitiesList: apiResponse.results, isLoading: false });
        } catch (err) {
            console.log("Error occurs while fetching data", err);
        } finally {
            this.setState({ isLoading: false })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Discover Screen</Text>
                {this.state.isLoading &&
                    <ActivityIndicator
                        size='large'  // small
                        style={styles.progress}
                        animating={true}
                        color={colors.loadingSpinnerColor} />
                }
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
    progress: {
        margin: 10,
        position: "absolute",
        top: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
})