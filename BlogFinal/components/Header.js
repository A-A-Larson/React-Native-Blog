import React, { useCallback } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = () => {

    const [fontsLoaded] = useFonts({
        'PermanentMarker-Regular': require('../assets/fonts/PermanentMarker-Regular.ttf'),
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Mah, Blah, Blah, Blog</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {   
        backgroundColor: '#efefef',
        width: '100%',
        alignItems: 'center',
        borderWidth: 0,
        shadowColor: '#000000',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.7,
        shadowRadius: 4,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        height: windowHeight * 0.6,
        width: windowWidth * 0.8,
        aspectRatio: 1,
        maxWidth: 415,
    },
    text: {
        flex: 1,
        fontFamily: 'PermanentMarker-Regular',
        fontSize: 50,
        textAlign: 'center',
    }
});    