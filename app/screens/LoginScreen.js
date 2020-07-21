import React, { Component, useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, ActivityIndicator } from 'react-native';
import colors from "../config/colors";
import LinearGradient from 'react-native-linear-gradient';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import constants from "../config/constants";
import auth from '@react-native-firebase/auth';

// Ref: https://www.freecodecamp.org/news/google-login-with-react-native-and-firebase/
// Ref: https://medium.com/@gilshaan/react-native-hooks-how-to-use-usestate-and-useeffect-3a10fd3e760c

function LoginScreen(props) {

    // States 
    const [isSigninInProgress, setSigninInProgress] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState([]);
    const [googleToken, setGoogleToken] = useState(null);
    const [facebookToken, setFacebookToken] = useState(null);

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['email'],
            webClientId: constants.googleWebClientId,
            offlineAccess: true,
        });

        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount

    }, []);

    function onAuthStateChanged(user) {
        setUserInfo(user);
        console.log("**********************  " + user);
        if (user) {
            setloggedIn(true);
            setGoogleToken(user.accessToken);
            // setGoogleToken(user.idToken);
        }
    }

    googleSignInHandler = async () => {
        try {
            setSigninInProgress(true);
            await GoogleSignin.hasPlayServices();
            const { accessToken, idToken } = await GoogleSignin.signIn();
            setLoggedIn(true);
            const credential = auth.GoogleAuthProvider.credetial(idToken, accessToken);
            await auth().signInWithCredetial(credetial);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                alert('Cancel');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                alert('Signin in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                alert('PLAY_SERVICES_NOT_AVAILABLE');
            } else {

            }
        } finally {
            setSigninInProgress(false);
        }
    };


    signOut = async () => {
        setSigninInProgress(true);
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            setloggedIn(false);
            setuserInfo([]);
        } catch (error) {
            console.error(error);
        } finally {
            setSigninInProgress(false);
        }
    };

    // handleGoogleLoggedIn = async () => {
    //     // Sending Token to server
    //     let date = this.sendDataToServer();
    //     if (data != null) {
    //         // TODO Move to next screen
    //     }
    // }

    // sendDataToServer() {
    //     let data = {
    //         "googleToken": this.state.googleToken,
    //         "facebookToken": this.state.facebookToken,
    //     }
    //     try {
    //         fetch("https://....", {
    //             method: "POST",
    //             headers: headers,
    //             body: JSON.stringify(data)
    //         })
    //             .then(function (response) {
    //                 return response.json();
    //             })
    //             .then(function (data) {
    //                 console.log(data)
    //             });
    //     } catch (error) {
    //         console.log(error.body);
    //         return null;
    //     }
    // }

    render() {
        if (this.state.loggedIn) {
            this.handleGoogleLoggedIn();
        }
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    source={require('../assets/background.png')} >
                    <LinearGradient
                        colors={[colors.lgGrdFromColor, colors.lgGrdMidColor, colors.lgGrdToColor]}
                        style={styles.linearGradient}
                        useAngle={true}
                        angle={0}
                        angleCenter={{ x: 0.5, y: 0.5 }} />
                    <Image style={styles.logoImage}
                        source={require("../assets/logo.png")} />

                    <GoogleSigninButton
                        style={styles.googleButton}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        disabled={this.state.isSigninInProgress}
                        onPress={this.googleSignInHandler}
                    />
                    {this.state.isSigninInProgress &&
                        <ActivityIndicator
                            size='large'  // small
                            style={styles.progress}
                            animating={true}
                            color={colors.loadingSpinnerColor} />
                    }
                    {loggedIn && (
                        <Button
                            onPress={this.signOut}
                            title="LogOut"
                            color="red"></Button>
                    )}
                </ImageBackground>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    googleButton: {
        width: 240,
        height: 48,
        bottom: 160,
    },
    linearGradient: {
        flex: 1,
        width: "100%",
        height: "100%",
        opacity: 0.85,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    logoImage: {
        position: "absolute",
        top: 60,
    },
    progress: {
        margin: 10,
        position: "absolute",
        top: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
})


export default LoginScreen;