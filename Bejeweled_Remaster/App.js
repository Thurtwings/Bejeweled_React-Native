import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>

            <ImageBackground source={require('./assets/img/background.png')} style={styles.backgroundImage}>
                <Text >Bienvenue Jérôme</Text>
                <Text>J'espère que tu apprécieras</Text>
            </ImageBackground>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover', // Adjust the image size and position
    },
});
