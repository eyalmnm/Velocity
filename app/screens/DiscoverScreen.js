import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, ActivityIndicator } from 'react-native';
import colors from "../config/colors";
import constants from "../config/constants";
import ViewPager from '@react-native-community/viewpager';
import ActivityPagerCard from '../adapters/ActivityPagerCard';

// Ref: https://github.com/react-native-community/react-native-viewpager
// Ref: https://stackoverflow.com/questions/45861099/react-native-foreach-loop
// Ref: http://blog.logicwind.com/implement-responsive-grid-layout-in-react-native-app/

export default class DiscoverScreen extends Component {

    state = {
        isLoading: false,
        activitiesList: [],
    }

    async componentDidMount() {
        try {
            this.setState({ isLoading: true })
            const activitiesApiCall = await fetch(constants.serverUrl + constants.activitiesListApi);
            const apiResponse = await activitiesApiCall.json();
            console.log('activitiesApiCall: ' + activitiesApiCall)
            this.setState({ activitiesList: apiResponse.results, isLoading: false });
        } catch (err) {
            console.log("Error occurs while fetching data", err);
        } finally {
            this.setState({ isLoading: false })
        }
    }

    render() {
        return (
            <View style={styles.container}
                orientation="horizontal"
                pageMargin={10}
                transitionStyle="scroll"
                showPageIndicator="true" >
                <Text>Discover Screen</Text>
                {this.state.activitiesList &&
                    <ViewPager style={styles.viewPager} initialPage={0}>
                        {this.state.activitiesList.map((actItem, indx) => {
                            <ActivityPagerCard
                                key={`ActivityPagerCard-${indx}`}
                            />
                        })}
                    </ViewPager>
                }
                {this.state.isLoading &&
                    <ActivityIndicator
                        size='large'  // small
                        style={styles.progress}
                        animating={true}
                        color={colors.loadingSpinnerColor} />
                }
            </ View>
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
    viewPager: {
        flex: 1,
    },
    progress: {
        margin: 10,
        position: "absolute",
        top: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
})