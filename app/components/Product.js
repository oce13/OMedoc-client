import React from 'react';
import { StyleSheet, Text,  Image,  View, Dimensions } from 'react-native';
import list from '../data/products';

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            
        };
        this.name="";
        this.description = "";
        this.price= "";
        this.retrieveData = this.retrieveData.bind(this);
    }

    retrieveData(){
        var data = Object.values(list);
        data.map((item, index)=>{
            if(index === this.state.id){
                
                    this.name= item.name;
                    this.description= item.Description;
                    this.price= item.prix;
                
                console.log(index + item.name);
            }else{
                //do nothing
            }
            
        });
    }

    render() {
        this.retrieveData();
        return (
            
            <View >
                <Text>{this.name}</Text>
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