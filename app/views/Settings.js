import React from 'react';
import { StyleSheet, Text, ScrollView, KeyboardAvoidingView} from 'react-native';

export default class Home extends React.Component {
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
                    <Text style={styles.Moto}>Settings!</Text>
                    
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
    Moto:{
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 20,
        textAlign: 'center',
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
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#00B0F0',
        borderRadius: 20,
    },
    buttonExt:{
        backgroundColor: '#fff',
        borderColor: '#00B0F0',
        borderRadius: 20,
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 16,
        marginBottom: 20,
        borderWidth: 2,
    },
    textBtn: {
        color: '#fff',
        fontWeight: 'bold',
        
    },
    textBtnWhite:{
        color: '#00B0F0',
        fontWeight: 'bold',
    }
});