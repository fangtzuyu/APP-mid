import React, { Component } from 'react';
import {  ScrollView, SegmentedControlIOS, View, StyleSheet } from 'react-native';

import AddDetail from './components/AddDetail';
import Btn_add from './components/Btn_add';

import DelDetail from './components/DelDetail';
import Btn_del from './components/Btn_del';


class Add extends Component {
state = {
    values: ['Add', 'Delete'],
    value: 'Add'
  };
_onValueChange = (value) => {
    this.setState({
      value: value,
    });
  };
     renderListView = (val) => {
    if (val === 'Delete') {
      return (
        <ScrollView>
        <DelDetail />
        <Btn_del />
      </ScrollView>
        )
    } else if (val  === 'Add') {
      return (
              <ScrollView>
              <AddDetail />
              <Btn_add 
              />
            </ScrollView>
        )
    }
  };
  
  render() {
    return (
      <ScrollView>
        <View>
          <View style = {styles.control}>
            <SegmentedControlIOS
              values={this.state.values}
              value={this.state.value}
              selectedIndex={0}
          onValueChange={this._onValueChange} />
          </View>
              {this.renderListView(this.state.value)}
          </View>

      </ScrollView>
    );
  }


}

const styles = StyleSheet.create({

  control: {
    marginTop:15,
    marginRight:50,
    marginLeft:50
  }

})

export default Add;
