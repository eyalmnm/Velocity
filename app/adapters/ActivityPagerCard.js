import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import colors from '../config/colors'

const posterPathBaseUrl = 'https://image.tmdb.org/t/p/w500'

const ActivityPagerCard = ({ }) => {
    return (
        <TouchableOpacity style={{ backgroundColor: 'transparent' }}
            onPress={() => navigation.navigate()} >
            <View style={styles.listItemContainer}>
                <Image source={{ uri: posterPathBaseUrl + poster_path }} style={styles.activityImage} />
                <Text style={styles.activityItemHeader}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    activityItemHeader: {
        fontSize: 18,
        color: '#656565',
        textAlign: 'left',
        marginStart: 5,
    },
    activityImage: {
        backgroundColor: 'transparent',
        width: 50,
        height: 50,
    },
    listItemContainer: {
        borderStyle: 'solid',
        borderColor: colors.defaultBgColor,
        borderBottomWidth: 2,
        borderRadius: 10,
        flexDirection: 'column', // row
        justifyContent: 'space-between',
        padding: 10,
        alignSelf: 'stretch'
    },
});

export default ActivityPagerCard;