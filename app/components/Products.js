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
            <View >
                <Text>{this.state.name}</Text>
                <FlatList
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
    cardBox: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.25,
        marginBottom: Dimensions.get('window').width * 0.04,
    },
    photoBox: {
        flex: 1,
        height: Dimensions.get('window').height * 0.25,
        width: Dimensions.get('window').width * 0.9,
        marginBottom: 10,
        borderRadius: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#545BA8',
    },
    moreInfo: {
        flexDirection: 'row',
    },
    price: {
        fontWeight: 'bold',
    }
});