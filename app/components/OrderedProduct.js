import React from 'react';
import { StyleSheet, Text, Image, View, Modal } from 'react-native';
import list from '../data/products';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Quantity from './Quantity';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux'

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            price: this.props.price,
            photo: this.props.photo,
            quantity: this.props.quantity,
            finalPrice: 0,
            modalVisible: false
        };
        this.fp = this.state.price * this.state.quantity;
        this.handler = this.handler.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.updateCart = this.updateCart.bind(this);
        this.changeButton = this.changeButton.bind(this);

    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    handler(nb) {
        this.setState({
            quantity: nb,
        });
    }

    addToCart() {
        if (this.state.quantity >= 1) {
            const action = { type: "ADD_TO_CART", payload: this.state };
            this.props.dispatch(action);
        }

    }

    updateCart() {
        if (this.state.quantity >= 1) {
            var fp = this.state.price * this.state.quantity;
            this.setState({ finalPrice: fp }, () => {
                const action = { type: "UPDATE_CART", payload: this.state };
                this.props.dispatch(action);
            });
        }else if (this.state.quantity===0){
            this.setState({ finalPrice: 0 }, () => {
                const action = { type: "REMOVE_FROM_CART", payload: this.state };
                this.props.dispatch(action);
                
            });
        }

    }

    changeButton() {
        this.fp = this.state.price * this.state.quantity;
        if (this.state.quantity === 0) {
            return (
                <Text style={styles.textStyle}>Supprimer</Text>
            );

        } else {
            return (
                <Text style={styles.textStyle}>Mettre à jour</Text>
            );

        }

    }

    componentWillMount() {
        this.setState({ finalPrice: this.state.price * this.state.quantity });
    }


    render() {

        const { modalVisible } = this.state;

        return (
            <View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <TouchableOpacity
                                style={styles.close}
                                onPress={() => {
                                    this.setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={{ color: '#545BA8', fontWeight: 'bold' }}>x</Text>
                            </TouchableOpacity>
                            <View style={styles.center}>
                                <Image source={{ uri: this.state.photo }} style={styles.photo2} />
                                <Text style={styles.modalText}>Quantité</Text>
                                <Quantity action={this.handler} qt={this.state.quantity} autho={true} />

                                <TouchableOpacity
                                    onPress={() => {
                                        this.setModalVisible(!modalVisible);
                                        this.updateCart();
                                    }}

                                >
                                    <LinearGradient
                                        colors={['#545BA8', '#925B9F']}
                                        start={[0, 0]}
                                        end={[1, 1]}
                                        location={[0.25, 0.2, 1]}
                                        style={styles.testBtn}
                                    >
                                        {this.changeButton()}
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>


                <TouchableOpacity
                    onPress={() => { this.setModalVisible(true); }}
                >
                    <View style={styles.container}>
                        <View style={styles.withQuantity}>
                            <Text style={styles.boldPurple}>x{this.state.quantity}</Text>
                            <Image source={{ uri: this.state.photo }} style={styles.photo} />
                            <View style={styles.info}>
                                <Text style={styles.name}>{this.state.name}</Text>
                                <Text>{this.state.price}€</Text>
                            </View>
                        </View>

                        <Text style={styles.boldPurple}>{this.fp}€</Text>

                    </View>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        marginLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderColor: 'darkgrey',
        paddingTop: 10,
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#f1f1f1',
        paddingLeft: 10,
    },
    photo2: {
        width: 250,
        height: 250,
    },
    info: {
        paddingLeft: 5,
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 500,
        shadowRadius: 200,
        elevation: 5,
        alignItems: 'flex-start',
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 18
    },
    testBtn: {
        //width: 100,
        height: 50,
        alignItems: 'center',
        padding: 16,
        marginBottom: 20,
        borderRadius: 20,
        elevation: 2
    },
    close: {
        width: 35,
        height: 35,
        borderRadius: 35,
        borderColor: '#545BA8',
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    center: {
        alignItems: 'center',
    },
    withQuantity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boldPurple: {
        fontWeight: 'bold',
        color: '#545BA8',
    }
});

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(Product);