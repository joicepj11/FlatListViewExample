
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import NetworkUtils from './utils/NetworkUtils' ;
import ListView from './components/ListView' ;
import ListDetailsView from './components/ListDetailsView';

export default class App extends Component {

  state = {
    bakeSalesJsonArray : [],
    selectedListViewIndexKey :null,
  }

//react js lifeCycle method
  async componentDidMount(){
    const bakeSalesJsonArray = await NetworkUtils.getBakeSalesDealJsonData();
    this.setState({bakeSalesJsonArray})
  }

  render() {
    
        if(this.state.selectedListViewIndexKey){
          return <ListDetailsView bakeSales= { this.getSelectedListViewIndexKey() }/>
        }
    
        if(this.state.bakeSalesJsonArray != null && this.state.bakeSalesJsonArray.length > 0){
          return <ListView 
                bakeSales = {this.state.bakeSalesJsonArray}
                onListViewPress = {this.setSelectedListViewIndexKey}/> 
        }
    
        return (
          <Text style = {styles.container}> fetching data</Text>
        );
      }

  setSelectedListViewIndexKey = (ListViewId) => {
    this.setState({
      selectedListViewIndexKey : ListViewId
    });
  }

  unSetSelectedListViewIndexKey = () => {
    this.setState({
      selectedListViewIndexKey : null
    });
  }
  
  getSelectedListViewIndexKey = () => {
   return this.state.bakeSalesJsonArray.find( (bakeSales) =>{
      return bakeSales.key === this.state.selectedListViewIndexKey 
   } );
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
