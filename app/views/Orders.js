import React from 'react';
import { StyleSheet, Text, ScrollView, KeyboardAvoidingView, View, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import Delivery from '../components/Delivery';
import OrderedProduct from '../components/OrderedProduct';
import { LinearGradient } from 'expo-linear-gradient';

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 0,
        }
        this.fp = 0;
        this.isEmpty = this.isEmpty.bind(this);
        this.computeTotal = this.computeTotal.bind(this);
        this.emptyCart = this.emptyCart.bind(this);
        this.payCart = this.payCart.bind(this);
    }

    computeTotal() {
        this.fp = 0;
        this.props.items.map(item => {
            this.fp += item.finalPrice;

        });
    }

    emptyCart() {
        const action = { type: "REMOVE_ALL" };
        this.props.dispatch(action);
    }

    isEmpty() {
        this.computeTotal()
        if (this.props.items.length <= 0) {
            return (
                <View style={styles.vide}>
                    <Image source={require('../img/panier.png')} style={{ width: 100, height: 100, marginBottom: 20 }} />
                    <Text style={styles.title}>Panier vide</Text>
                    <Text>Et si vous alliez le remplir ?</Text>
                </View>

            );
        } else {

            return (


                <View style={{ backgroundColor: '#F9F9F9'}}>
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
                        <View style={styles.priceInfo}>
                            <Text>Sous-total</Text>
                            <Text style={{ fontWeight: 'bold' }}>{this.fp}€</Text>
                        </View>
                        <View style={styles.priceInfo}>
                            <Text>Frais de livraison</Text>
                            <Text style={{ fontWeight: 'bold' }}>5€</Text>
                        </View>
                        <View style={styles.priceInfo}>
                            <Text>Total</Text>
                            <Text style={{ fontWeight: 'bold' }}>{this.fp + 5}€</Text>
                        </View>
                    </View>
                    <View style={styles.commande}>
                        <TouchableOpacity
                            style={{ alignItems: 'center' }}
                            onPress={this.emptyCart}
                        >
                            <Text style={{ fontWeight: 'bold', color: '#545BA8' }}>Vider le panier</Text>
                        </TouchableOpacity>

                    </View>
                    {this.payCart()}
                </View>





            );

        }
    }

    payCart() {
        if (this.props.items.length >= 1) {

            return (
                <View style={styles.pay}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("Payment");
                        }}

                    >
                        <LinearGradient
                            colors={['#545BA8', '#925B9F']}
                            start={[0, 0]}
                            end={[1, 1]}
                            location={[0.25, 0.2, 1]}
                            style={styles.testBtn}
                        >
                            <Text style={styles.textStyle}>Finaliser la commande</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <ScrollView style={{backgroundColor: 'f9f9f9'}}>
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
        borderTopWidth: 0.5,
        borderTopColor: 'darkgrey',
        borderBottomColor: 'darkgrey',
        borderBottomWidth: 0.5,
        backgroundColor: '#fff',
    },
    priceInfo: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pay: {
       
        //backgroundColor: '#fff',
        height: 100,
        // borderTopWidth: 0.5,
        // borderTopColor: 'darkgrey',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    testBtn: {
        width: 400,
        height: 50,
        alignItems: 'center',
        padding: 16,
        
        borderRadius: 16,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },

});

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(Orders);