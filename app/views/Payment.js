import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, View, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 0,
        }
        this.fp = 0;
        this.emptyCart = this.emptyCart.bind(this);

    }

    emptyCart() {
        const action = { type: "REMOVE_ALL" };
        this.props.dispatch(action);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <View style={styles.headerBox}>
                        <TouchableOpacity style={styles.place}>
                            <Image source={require('../img/logo2.png')} style={{ width: 60, height: 60, marginRight: 20 }} />
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.title}>Finaliser la commande</Text>
                                <Ionicons name="ios-arrow-down" size={25} style={{ paddingLeft: 10 }} color='#545BA8' />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title2}>Livraison</Text>
                    <View style={styles.info}>
                        <Image source={require('../img/plan.png')} style={{ width: Dimensions.get('window').width, height: 150 }} />
                        <View style={styles.info2}>
                            <Text>21B Rue de Gautier, Courbevoie 941300</Text>
                            <TouchableOpacity
                                onPress={() => { this.setModalVisible(true); }}
                            >
                                <Text style={styles.modify}>Modifier</Text>
                            </TouchableOpacity>
                        </View>

                    </View>



                    <Text style={styles.title2}>Paiement</Text>
                    <View style={styles.info}>
                        <View style={styles.info3}>
                            <View style={styles.pinfo}>
                                <Text style={styles.tinfo}>Card number</Text>
                                <TextInput
                                    placeholder="card number"
                                    value="5545 3423 6543 6755"
                                />
                            </View>

                            <View style={styles.pinfo}>
                                <Text style={styles.tinfo}>CCV</Text>
                                <TextInput
                                    placeholder="CVV"
                                    value="345"
                                />
                            </View>

                            <View style={styles.pinfo}>
                                <Text style={styles.tinfo}>Month</Text>
                                <TextInput
                                    value="February"
                                />
                            </View>

                            <View style={styles.pinfo}>
                                <Text style={styles.tinfo}>Year</Text>
                                <TextInput
                                    value="2021"
                                />
                            </View>


                        </View>
                    </View>

                    <View style={styles.pay}>
                        <TouchableOpacity
                            onPress={() => {
                                alert("Merci!");
                                this.props.navigation.navigate("Home");
                            }}

                        >
                            <LinearGradient
                                colors={['#545BA8', '#925B9F']}
                                start={[0, 0]}
                                end={[1, 1]}
                                location={[0.25, 0.2, 1]}
                                style={styles.testBtn}
                            >
                                <Text style={styles.textStyle}>Payer</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
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
    container: {
        width: Dimensions.get('window').width,
        justifyContent: 'flex-start',
        backgroundColor: 'f9f9f9',
    },
    title2: {
        marginTop: 30,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#545BA8',
        paddingLeft: 10,
        paddingBottom: 10,
    },
    list: {
        borderTopWidth: 0.5,
        borderTopColor: 'darkgrey',
        borderBottomColor: 'darkgrey',
        borderBottomWidth: 0.5,
        backgroundColor: '#fff',
    },
    info: {
        borderBottomColor: 'darkgray',
        borderTopColor: 'darkgray',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        //paddingLeft: 10,
        //paddingTop: 10,
        paddingBottom: 10,

    },
    modify: {
        color: '#545BA8',
        fontWeight: 'bold'
    },
    info2: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
    },
    tinfo: {
        fontWeight: 'bold',
        paddingRight: 20,
        paddingLeft: 10,

    },
    pinfo: {
        flexDirection: 'row',
        alignItems: "center",
        paddingTop: 10,
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

export default connect(mapStateToProps)(Payment);