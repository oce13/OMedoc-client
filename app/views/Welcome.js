import React from 'react';
import { StyleSheet, Text, ScrollView, View, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        }

    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <ScrollView style={styles.container}>
                    <View style={{flexDirection: "row", justifyContent:'center', marginBottom: 30}}>
                        <Text style={styles.Moto}>Votre pharmacie,</Text><Text style={styles.Moto2}> à domicile.</Text>
                    </View>
                    
                    
                    <Image source={require('../img/logo2.png')} style={{ width: 350, height: 350, marginBottom: 50 }} />

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('HomeLog')}
                    >
                        <LinearGradient
                            colors={['#545BA8', '#925B9F']}
                            start={[0, 0]}
                            end={[1, 1]}
                            location={[0.25, 0.2, 1]}
                            style={styles.testBtn}
                        >
                            <Text style={styles.textBtn}>Connexion</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <LinearGradient
                        colors={['#545BA8', '#925B9F']}
                        start={[0, 0]}
                        end={[1, 1]}
                        location={[0.25, 0.2, 1]}
                        style={styles.gradientExt}
                    >
                        <TouchableOpacity
                            style={styles.buttonExt}
                            onPress={() => this.props.navigation.navigate('SignUp')}
                        >
                            <Text style={styles.textBtnWhite}>Inscription</Text>

                        </TouchableOpacity>

                    </LinearGradient>


                </ScrollView>
            </KeyboardAvoidingView >
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 40,
        paddingRight: 40,
    },
    Moto: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    Moto2: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#545BA8',
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 1,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    buttonExt: {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 344,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBtn: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textBtnWhite: {
        color: '#545BA8',
        fontWeight: 'bold',
    },
    testBtn: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 16,
        marginBottom: 20,
        borderRadius: 13,
    },
    gradientExt: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 50,
        borderRadius: 13,
    }
});