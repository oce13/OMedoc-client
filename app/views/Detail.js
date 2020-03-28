import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Image, View, Dimensions, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Products from '../components/Products';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.navigation.state.params.id,
            name: this.props.navigation.state.params.name,
            address: this.props.navigation.state.params.address,
            photo: this.props.navigation.state.params.photo,
            cat: this.props.navigation.state.params.cat,
            products: this.props.navigation.state.params.products,
        }
    }

    categories() {
        var a = "";
        console.log(a);
        this.state.cat.map((item, index) => {
            if (index === this.state.cat.length - 1) {
                a += item;
            } else {
                a += item + "・";
            }

        });
        return (a);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <ScrollView>
                    <View style={styles.container}>
                        <Image source={{ uri: this.props.navigation.state.params.photo }}
                            style={styles.photoBox}
                        />
                        <View style={styles.nameBox}>
                            <Text style={styles.name}>{this.state.name}</Text>
                            <View style={styles.info}>
                                <Text style={styles.greyText}>{this.categories()}</Text>
                                <View style={styles.address}>
                                    <Ionicons name="ios-pin" size={15} color='#545BA8' />
                                    <Text style={styles.greyText}>  {this.state.address}</Text>
                                </View>
                            </View>
                            <Text style={styles.info2}>T'es un pizza lover ? Viens chez nous sans plus attendre!
                            Nous saurons de donner le plaisir de manger une vrai pizza
                        </Text>
                        </View>

                        <FlatList
                            data={this.state.products}
                            renderItem={({ item }) => (
                                <View>
                                    <Products
                                        name={item.cat}
                                        list={item.list}
                                    />
                                </View>


                            )}
                            keyExtractor={item => item.cat}
                        />

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
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        //marginBottom: 20,
    },
    nameBox: {
        alignItems: 'flex-start',
        backgroundColor: 'white',
        alignSelf: 'stretch',
        paddingTop: 20,
        paddingLeft: 10,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: 'darkgrey',

    },
    photoBox: {
        //flex: 1,
        height: Dimensions.get('window').height * 0.35,
        width: Dimensions.get('window').width,
        //marginBottom: 10,
        //borderRadius: 5,
    },
    address: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#545BA8',
        paddingBottom: 10,

    },
    greyText: {
        color: 'darkgrey',
        paddingBottom: 5,
        //fontWeight: 'bold',
    },
    info: {
        width: Dimensions.get('window').width,
        paddingLeft: 5,
        paddingBottom: 10,
        borderBottomWidth: 0.2,
        borderBottomColor: 'darkgrey',
    },
    info2: {
        paddingTop: 20,
        paddingBottom: 10,
    }
});