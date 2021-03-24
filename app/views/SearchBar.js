import React from 'react';
import { StyleSheet, Text, ScrollView, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Dimensions, FlatList, Vibration } from 'react-native';
import products from '../data/products';
import pharma from '../data/pharma';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searching: "Rechercher...",
            navigation: this.props.navigation,
            query: "",
            dataP: [],
            dataC: [],
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.searchData = this.searchData.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.renderFlat = this.renderFlat.bind(this);

    }

    handleSearch = text => {
        this.setState({ query: text }, () => {
            this.searchData();
        });
    }


    searchData() {

        if (this.state.query.length > 0) {
            //Search for products and categories
            const dtp = products.filter(x => x.name.includes(this.state.query.toLowerCase()));
            const dtc = pharma.filter(x => x.categories.includes(this.state.query.toLowerCase()));

            var Products = [];


            pharma.map((item) => {
                item.products.map((item2) => {
                    item2.list.map(item3 => {
                        dtp.map(item4 => {
                            if (item4.id === item3) {
                                item.nom_compo = item4.name;
                                Products.push(item);
                            }
                        });
                    });
                });
            });
            // this.setState({ data: newData }, () => {
            //     console.log(this.state.data.Products[0].name);

            // });
            this.setState({ dataP: Products, dataC: dtc });


        } else {
            this.setState({ dataP: [], dataC: [] });
        }

    }

    renderFlat() {
        return (
            <FlatList
                data={this.state.dataP}
                keyExtractor={item => item.id}
                renderItem={(item) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>Yo</Text>
                    </View>
                )}
            />
        );
    }

    componentDidUpdate() {
        console.log(this.state.dataP.length);
        //console.log(typeof(this.state.dataP));
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.place}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Rechercher..."
                        onChangeText={this.handleSearch}
                    />
                    <TouchableOpacity
                        onPress={() => this.state.navigation.navigate('Home')}
                    >
                        <Text style={{ color: '#545BA8', fontWeight: 'bold' }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView >
                    <Text style={styles.Moto}>SearchBAR</Text>
                    <View>
                        <Text>Produits</Text>


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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 40,
        paddingRight: 40,
    },
    Moto: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 20,
        textAlign: 'center',
    },
    textInput: {
        width: Dimensions.get('window').width * 0.80,
        padding: 10,
        backgroundColor: '#f1f1f1',
        borderRadius: 15,
        fontSize: 20,
    },
    place: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingLeft: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

});