import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.imageHeight = new Animated.Value(220);
        this.logoMarginBottom = new Animated.Value(30);
        this.login2 = this.login2.bind(this);
    }

    componentWillMount() {
        this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }

    keyboardWillShow = (event) => {
        Animated.timing(this.imageHeight, {
            duration: event.duration,
            toValue: 40,
        }).start();

        Animated.timing(this.logoMarginBottom, {
            duration: event.duration,
            toValue: 10,
        }).start();
    }

    keyboardWillHide = (event) => {
        Animated.timing(this.imageHeight, {
            duration: event.duration,
            toValue: 220,
        }).start();
        Animated.timing(this.logoMarginBottom, {
            duration: event.duration,
            toValue: 30,
        }).start();
    }

    componentDidMount() {
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {
        var value = await AsyncStorage.getItem('user');
        if (value !== null) {
            this.props.navigation.navigate('Profile');
        }
    }

    login = () => {

        fetch('http://127.0.0.1:3000/login', {
            method: 'POST',
            headers: {
                "Accept": 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        })
            .then(response => response.json())
            .then((responseJson => {
                console.log(responseJson);

                if (responseJson === true) {
                    this.props.navigation.navigate('Home');

                }
                else {
                    alert("Connexion failed");
                    //alert(responseJson.message);
                }
            })).catch((err) => console.log(err))
    }

    login2(){
        if((this.state.email==="paul.maschernay@gmail.com")&&(this.state.password==="okokok")){
            this.props.navigation.navigate('Home');
        }
    }

    signup = () => {
        this.props.navigation.navigate('Signup');
    }

    render() {

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <View style={styles.containerInBetween}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Welcome')}
                        >
                            <Ionicons name="ios-arrow-round-back" size={50} color="black" />
                        </TouchableOpacity>
                        
                        <Text style={styles.Moto}>Connexion</Text>
                    </View>
                    <View style={styles.containerInBetween}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Email"
                            onChangeText={(text) => this.setState({ email: text })}
                        />
                        <TextInput
                            secureTextEntry={true}
                            style={styles.textInput}
                            placeholder="Mot de passe"
                            onChangeText={(text) => this.setState({ password: text })}
                        />
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={this.login2}
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
                    </View>

                </View>
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
    containerInBetween:{
        marginBottom: 60,
        alignSelf: 'stretch',
        alignItems:'flex-start',
    },
    Moto: {
        fontSize: 22,
        fontWeight: 'bold',

    },
    Moto2: {
        fontSize: 22,
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