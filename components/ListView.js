import React, { Component } from 'react';
import { StyleSheet,FlatList }from 'react-native';
import PropTypes from 'prop-types' ;
import ListItem from './ListItem' ;

class ListView extends Component {

    static PropTypes  = {
        bakeSales : PropTypes.object,
        onListViewPress:PropTypes.func,
    }

    // callView = (item) => {
    //    return( <View>
    //         <Text style= {styles.textItem}> {item.title}</Text>
    //         <Text style= {styles.textItem}> {item.title}</Text>
    //     </View>);
    // }
    // this.callView(item) 
    render() { 
        return (
           <FlatList style ={styles.container}
           data = {this.props.bakeSales}
           renderItem ={ 
               ({item}) => <ListItem 
                            bakeSales= {item} 
                            onPress = {this.props.onListViewPress}
                            />
           }/>
        
        );
    }
}
const styles = StyleSheet.create({
    container: {
       flex: 1,
    }
});

export default ListView;