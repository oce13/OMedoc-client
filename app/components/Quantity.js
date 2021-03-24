import React from 'react';
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class Quantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.qt,
            autho: this.props.autho,
        };
        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);
    }

    add() {
        if (this.state.quantity < 10) {
            this.setState({ quantity: this.state.quantity + 1 });
            this.props.action(this.state.quantity + 1);
        }
        
    }

    minus() {
        if (!this.state.autho) {
            if (this.state.quantity > 1) {
                this.setState({ quantity: this.state.quantity - 1 });
                this.props.action(this.state.quantity-1);
                
            }
        } else {
            if (this.state.quantity > 0) {
                this.setState({ quantity: this.state.quantity - 1 });
                this.props.action(this.state.quantity-1);
            }
        }
        


    }
    
    render() {
        return (
            <View style={styles.container} >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { this.minus(); }}
                >
                    <Text style={styles.add}> - </Text>
                </TouchableOpacity>
                <Text style={styles.title}>{this.state.quantity}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { this.add(); }}
                >
                    <Text style={styles.add}> + </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginRight: 10,
        marginLeft: 10,
    },
    button: {
        width: 35,
        height: 35,
        borderRadius: 35,
        borderColor: '#545BA8',
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    add: {
        color: '#545BA8',
        fontWeight: 'bold',
    }
});