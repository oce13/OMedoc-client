import React from 'react';
import { StyleSheet, Text, ScrollView, KeyboardAvoidingView, View, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import Delivery from '../components/Delivery';
import OrderedProduct from '../components/OrderedProduct';

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        }
        this.isEmpty = this.isEmpty.bind(this);

    }

    isEmpty() {
        if (this.props.items.length <= 0) {
            return (
                <View style={styles.vide}>
                    <Image source={require('../img/panier.png')} style={{ width: 100, height: 100, marginBottom: 20 }} />
                    <Text style={styles.title}>Panier vide</Text>
                    <Text>Et si vous alliez le remplir ?</Text>
                </View>

            );
        } else {
            console.log(this.props.items);
            return (
                <View style={{ backgroundColor: '#F9F9F9', height: Dimensions.get('window').height * 0.9 }}>
                    <Delivery />
                    <View style={styles.commande}>
                        <FlatList
                            data={this.props.items}
                            renderItem={({ item }) => (
                                <View>
                                    <OrderedProduct 
                                        id={item.id}
                                        name={item.name}
                                        price={item.price}
                                        photo={item.photo}
                                        quantity={item.quantity}
                                    />
                                </View>

                            )}
                            keyExtractor={item => item} />
                    </View>
                </View>

            );

        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <ScrollView>
                    <View style={styles.headerBox}>
                        <TouchableOpacity style={styles.place}>
                            <Image source={require('../img/logo2.png')} style={{ width: 60, height: 60, marginRight: 20 }} />
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.title}>Mon panier</Text>
                                <Ionicons name="ios-arrow-down" size={25} style={{ paddingLeft: 10 }} color='#545BA8' />
                            </View>
                        </TouchableOpacity>
                    </View>
                    {this.isEmpty()}
                </ScrollView>

            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    headerBox: {
        width: Dimensions.get('window').width,
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'darkgrey',
    },
    place: {
        flexDirection: 'row',
        paddingLeft: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    vide: {
        backgroundColor: '#F9F9F9',
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height * 0.8,
    },
    commande: {
        marginTop: 20,
        width: Dimensions.get('window').width,
        justifyContent: 'flex-start',
        paddingTop: 20,
        paddingBottom: 20,
        borderTopWidth: 0.2,
        borderTopColor: 'darkgrey',
        borderBottomColor: 'darkgrey',
        borderBottomWidth: 0.2,
        backgroundColor: '#fff',
    }

});

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(Orders);