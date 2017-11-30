import React, { Component } from 'react';
import { StyleSheet, View ,Image ,Text}from 'react-native';
import PropTypes from 'prop-types' ;

class ListDetailsView extends Component {

    static PropTypes = {
        bakeSales : PropTypes.object,
       //Todo backpress  onPress:PropTypes.func,
    }

    //TODO handle back press by calling App.js unSetSelectedListViewIndexKey function
    render() { 
        const {bakeSales} = this.props;
        return (
            <View style={styles.container} >
                <View style={styles.imageContainer}>
                    <Image style = {styles.imageItem} source = { {uri : bakeSales.media[0] } } />
                </View> 
               <View style={styles.textContainer}>
                    <Text style={styles.textItem1}> {bakeSales.title} </Text>
                    <Text style={styles.textItem}> Price: {bakeSales.price}</Text>
                </View>
                <View style={styles.textContainer1}>
                    <Text style={{ fontSize:18}}> some dummy text description</Text>
                </View>
            </View>
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
    imageContainer:{
        flex:50
    },
    imageItem:{
        width: 400,
        height:300,
        margin:10,
        padding:20,
    },
    textItem:{
        flex:25,
        fontSize:15,
        color:'black',
        alignItems:'flex-end'
    },
    textItem1:{
        flex:25,
        fontSize:15,
        color:'blue',
    },
    textContainer:{
        marginTop:10,
        flex:25,
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'flex-start' ,
        justifyContent:'space-between'
    },
    textContainer1:{
        flex:25,
        flexWrap:'wrap',
        alignItems:'flex-start' ,
        justifyContent:'space-between'
    }
});

export default ListDetailsView;