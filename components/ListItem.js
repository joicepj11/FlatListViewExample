import React, { Component } from 'react';
import { StyleSheet, View ,Image ,Text, TouchableOpacity}from 'react-native';
import PropTypes from 'prop-types' ;

class ListItem extends Component {

    static PropTypes = {
        bakeSales : PropTypes.object,
        onPress:PropTypes.func,
    }

    handlePress = () => {
        //calls App.js setSelectedListViewIndexKey method
        this.props.onPress(this.props.bakeSales.key)
    }
    
    render() { 
        const {bakeSales} = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={this.handlePress}>
               <Image style = {styles.imageItem} source = { {uri : bakeSales.media[0] } } />
               <View style={styles.textContainer}>
               <Text style={styles.textItem1}> {bakeSales.title} </Text>
               <Text style={styles.textItem}> Price: {bakeSales.price}</Text>
               </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
       flex: 1,
       flexDirection:'column',
       flexWrap:'wrap',
       alignItems:'center'
    },
    imageItem:{
        flex:40,
        width: 300,
        height:200,
        margin:10,
        padding:20,
        borderWidth:10
    },
    textItem:{
        width:100,
       fontSize:15,
       color:'black',
       alignItems:'flex-end'
    },
    textItem1:{
        width:200,
       fontSize:15,
       color:'blue',
    },
    textContainer:{
        width:300,
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center' ,
        justifyContent:'space-between'
    }
});

export default ListItem;