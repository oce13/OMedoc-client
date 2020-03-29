import React from 'react';
import { StyleSheet, Text, Image, View, Modal, DatePickerIOS } from 'react-native';
import list from '../data/products';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Quantity from './Quantity';
import { LinearGradient } from 'expo-linear-gradient';

class Delivery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "",
            chosenDate: new Date(),
            modalVisible: false
        };
        this.changeTime = this.changeTime.bind(this);
        this.setDate = this.setDate.bind(this);

    }

    setDate(newDate) {
        this.setState({chosenDate: newDate});
      }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    changeTime() {
        if (this.state.time === "") {
            return (
                <Text> dans 40 - 50 min.</Text>
            );
        } else {
            return (
                <Text> pour {this.state.time}</Text>
            );
        }
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
                                <DatePickerIOS
                                    date={this.state.chosenDate}
                                    onDateChange={this.setDate}
                                />
                            </View>

                        </View>
                    </View>
                </Modal>



                <View style={styles.container}>
                    <View style={styles.info}>
                        <Text style={styles.name}>Livraison prévue</Text>
                        {this.changeTime()}
                    </View>
                    <TouchableOpacity
                        onPress={() => { this.setModalVisible(true); }}
                    >
                        <Text style={styles.modify}>Modifier</Text>
                    </TouchableOpacity>

                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        //marginLeft: 15,
        paddingRight: 10,
        paddingBottom: 20,
        paddingTop: 20,
        borderBottomWidth: 0.2,
        borderTopWidth: 0.2,
        borderColor: 'darkgrey',
        backgroundColor: '#fff',

    },
    info: {
        paddingLeft: 5,
        flexDirection: 'row',
    },
    modify: {
        color: '#545BA8',
        fontWeight: 'bold'
    },
    name: {
        fontSize: 15,
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
    }
});



export default Delivery;