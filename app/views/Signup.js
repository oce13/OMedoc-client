import React from 'react';
import { StyleSheet, Text, ScrollView, View, AsyncStorage, KeyboardAvoidingView, TextInput, TouchableOpacity, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';


export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            phoneNumber: ""
        }
        this.imageHeight = new Animated.Value(220);
        this.logoMarginBottom = new Animated.Value(30);
        
    }

    componentDidMount() {
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {
        var value = await AsyncStorage.getItem('user');
        if (value !== null) {
            this.props.navigation.navigate('Home');
        }
    }

    signup = () => {
        if (!this.checkInput()) {
            fetch('http://127.0.0.1:3000/register', {
                method: 'POST',
                headers: {
                    "Accept": 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    phoneNumber: this.state.phoneNumber,
                })
            })
                .then(response => response.json())
                .then((responseJson => {
                    console.log(responseJson);

                    if (responseJson) {
                        this.props.navigation.navigate('Home');
                    }
                    else {
                        alert("Register failed");
                        //alert(responseJson.message);
                    }
                })).catch((err) => console.log(err))

        }

    }

    checkInput() {
        var cpt = 0;
        var pluriel = "";
        var message = "Please fill the requested field" + pluriel + ": ";
        var empty = false;

        if (this.state.firstName === '') {
            cpt++;
            if (empty === false) {
                empty = true;
            }
            message += "first name,";

        } if (this.state.lastName === '') {
            cpt++;
            if (empty === false) {
                empty = true;
            }
            message += "last name,";
        } if (this.state.email === '') {
            cpt++;
            if (empty === false) {
                empty = true;
            }
            message += "email,";
        } if (this.state.phoneNumber === '') {
            cpt++;
            if (empty === false) {
                empty = true;
            }
            message += "phone number,";
        } if (this.state.password === '') {
            cpt++;
            if (empty === false) {
                empty = true;
            }
            message += "password,";
        }

        if (cpt > 1) {
            pluriel = "s";
        }
        if (empty) {
            alert(message);
        }

        return empty;

    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <ScrollView style={styles.container}>
                    <View style={styles.containerInBetween}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Welcome')}
                        >
                            <Ionicons name="ios-arrow-round-back" size={50} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.Moto}>Become a part of our Community!</Text>
                    </View>

                    <View style={styles.containerInBetween}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="firstName"
                            onChangeText={(text) => this.setState({ firstName: text })}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="lastName"
                            onChangeText={(text) => this.setState({ lastName: text })}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="email"
                            onChangeText={(text) => this.setState({ email: text })}
                        />
                        <TextInput
                            keyboardType={'phone-pad'}
                            maxLength={10}
                            style={styles.textInput}
                            placeholder="phoneNumber"
                            onChangeText={(text) => this.setState({ phoneNumber: text })}
                        />
                        <TextInput
                            secureTextEntry={true}
                            style={styles.textInput}
                            placeholder="password"
                            onChangeText={(text) => this.setState({ password: text })}
                        />
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={this.signup}
                        >
                            <LinearGradient
                                colors={['#545BA8', '#925B9F']}
                                start={[0, 0]}
                                end={[1, 1]}
                                location={[0.25, 0.2, 1]}
                                style={styles.testBtn}
                            >
                                <Text style={styles.textBtn}>Register</Text>
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
                                onPress={() => this.props.navigation.navigate('HomeLog')}
                            >
                                <Text style={styles.textBtnWhite}>LogIn</Text>

                            </TouchableOpacity>

                        </LinearGradient>
                    </View>


                </ScrollView>
            </KeyboardAvoidingView>
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
    containerInBetween: {
        marginBottom: 40,
    },
    Moto: {
        fontSize: '22',
        fontWeight: 'bold',
    },
    Moto2: {
        fontSize: '22',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#545BA8',
    },
    textInput: {
        width: 350,
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
        width: 350,
        height: 50,
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