import React, { Component, useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
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
        setuserInfo(user);
        console.log("********************** onAuthStateChanged " + user);
        if (user) {
            setloggedIn(true);
            // sendDataToServer(user.accessToken, null);
            sendDataToServer(user.idToken, null);
        }
    }

    googleSignInHandler = async () => {
        try {
            setSigninInProgress(true);
            await GoogleSignin.hasPlayServices();
            const { accessToken, idToken } = await GoogleSignin.signIn();
            setLoggedIn(true);
            const credential = auth.GoogleAuthProvider.credetial(idToken, accessToken);
            console.log("********************** googleSignInHandler 1 ");
            await auth().signInWithCredetial(credetial);
            console.log("********************** googleSignInHandler 2 ");
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

    function sendDataToServer(gToken, fToken) {
        let data = {
            "googleToken": gToken,
            "facebookToken": fToken,
        }
        try {
            fetch("https://....", {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data)
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data)
                });
        } catch (error) {
            console.log(error.body);
            return null;
        }
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
                <TouchableOpacity 
                    style={styles.fbButton}
                    disabled={isSigninInProgress}>
                    <Text style={styles.fbButtonText}
                        >Fb Login Button</Text>
                </TouchableOpacity>
                <GoogleSigninButton
                    style={styles.googleButton}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    disabled={isSigninInProgress}
                    onPress={googleSignInHandler}
                />
                {isSigninInProgress &&
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
    fbButton: {
        width: 232,
        height: 38,
        bottom: 170,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3b5998',
    },
    fbButtonText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#F2F3F4',
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