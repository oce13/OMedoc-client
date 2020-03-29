import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Image, View, Dimensions, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Products from '../components/Products';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { connect } from 'react-redux'

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.navigation.state.params.id,
            name: this.props.navigation.state.params.name,
            address: this.props.navigation.state.params.address,
            photo: this.props.navigation.state.params.photo,
            cat: this.props.navigation.state.params.cat,
            products: this.props.navigation.state.params.products,
            modalVisible: false,
        }
        this.removeCart = this.removeCart.bind(this);
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

    removeCart(){
        const action = { type: "REMOVE_ALL"};
        this.props.dispatch(action);
        
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>❗️ Attention ❗️</Text>
                                <Text>Si vous quittez cette page, votre panier sera vidé 😰</Text>

                                <LinearGradient
                                    colors={['#545BA8', '#925B9F']}
                                    start={[0, 0]}
                                    end={[1, 1]}
                                    location={[0.25, 0.2, 1]}
                                    style={styles.gradientExt}
                                >
                                    <TouchableOpacity
                                        style={styles.buttonExt}
                                        onPress={() => {
                                            this.setState({ modalVisible: false });
                                        }}
                                        
                                    >
                                        <Text style={styles.textBtnWhite}>Rester</Text>

                                    </TouchableOpacity>

                                </LinearGradient>

                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({ modalVisible: false });
                                        this.removeCart();
                                        this.props.navigation.navigate('Home');
                                    }}

                                >
                                    <LinearGradient
                                        colors={['#545BA8', '#925B9F']}
                                        start={[0, 0]}
                                        end={[1, 1]}
                                        location={[0.25, 0.2, 1]}
                                        style={styles.testBtn}
                                    >
                                        <Text style={styles.textStyle}>Quitter quand même</Text>
                                    </LinearGradient>
                                </TouchableOpacity>

                                
                            </View>
                        </View>
                    </Modal>
                </View>


                <ScrollView>
                    <View style={styles.container}>
                        <TouchableOpacity
                            style={styles.close}
                            onPress={() => {
                                //this.props.navigation.navigate('Home');
                                this.setState({ modalVisible: true });
                            }}
                        >
                            <Text style={{ color: '#545BA8', fontWeight: 'bold' }}>←</Text>
                        </TouchableOpacity>
                        <Image source={{ uri: this.props.navigation.state.params.photo }}
                            style={styles.photoBox}
                        />

                        <View style={styles.nameBox}>
                            <Text style={styles.name}>{this.state.name}</Text>
                            <View style={styles.info}>
                                <Text>{this.props.items.length}GROS</Text>
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
    },
    close: {
        width: 35,
        height: 35,
        borderRadius: 35,
        borderColor: '#545BA8',
        borderWidth: 3,
        position: 'absolute',
        left: 20,
        top: 20,
        zIndex: 40,
        justifyContent: 'center',
        alignItems: 'center',
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
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
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
        textAlign: "center"
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
    buttonExt: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: 165,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradientExt: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 171,
        height: 50,
        borderRadius: 23,
        marginBottom: 20,
        marginTop: 20,
    },
    textBtnWhite:{
        fontWeight: 'bold',
        color: '#545BA8',
    }

});

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(Detail);