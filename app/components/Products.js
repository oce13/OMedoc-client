import React from 'react';
import { StyleSheet, Text,  Image,  View, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Product from './Product';

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list,
            name: this.props.name,
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.state.name}</Text>
                <FlatList
                style={styles.list}
                data={this.state.list}
                renderItem={({ item }) => (
                    <View>
                    <Product
                    id={item}
                    />
                    </View>

                )}
                keyExtractor={item => item}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width,
        justifyContent: 'flex-start',
        paddingTop: 30,
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#545BA8',
        paddingLeft: 10,
        paddingBottom: 10,
    },
    list:{
        borderTopWidth: 0.5,
        borderTopColor: 'darkgrey',
        borderBottomColor: 'darkgrey',
        borderBottomWidth: 0.5,
        backgroundColor: '#fff',
    }
});