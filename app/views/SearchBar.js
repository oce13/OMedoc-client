import React from 'react';
import { StyleSheet, Text, ScrollView, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Keyboard, Animated , Dimensions} from 'react-native';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searching: "Rechercher...",
            navigation: this.props.navigation,
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.place}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={this.state.searching}
                        onChangeText={(text) => this.setState({ searching: text })}
                    />
                    <TouchableOpacity
                        onPress={()=>this.state.navigation.navigate('Home')}
                    >
                        <Text style={{color:'#545BA8', fontWeight:'bold'}}>Cancel</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.container}>
                    <Text style={styles.Moto}>SearchBAR</Text>

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
    Moto: {
        fontSize: '18',
        fontWeight: 'bold',
        paddingBottom: 20,
        textAlign: 'center',
    },
    textInput: {
        width: Dimensions.get('window').width * 0.80,
        padding: 10,
        backgroundColor: '#f1f1f1',
        borderRadius: 15,
        fontSize: 20,
    },
    place: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    
});