import Expo from 'expo';
import React ,{ Component }from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Button, PickerIOS, } from 'react-native';
import { Entypo } from '@expo/vector-icons';


class Search extends React.Component {

  goToPageTwo = () => {
    this.props.navigation.navigate('Searchlist');
  };

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
          <View style = {styles.search_box}>
              <Entypo name="magnifying-glass" size={20} color="black" 
                      style = {styles.search_icon}  />

              <TextInput
                placeholder="請輸入欲查詢機構名稱"
                style={styles.text_input}
              />
              <Entypo name="circle-with-cross" size={15} color="black" 
                      style = {styles.delete_icon}  />

          </View>
          <View style = {styles.search_button}>
            <Button 
              backgroundColor='#03A9F4'
              title='搜尋'
              onPress={() => this.goToPageTwo()}
              />
          </View>
          <View style ={styles.line}></View>
          <View style = {styles.city_selection}>
            <Text style = {styles.city_text}>縣 / 市</Text>
            <Entypo name="chevron-small-down" size={20} color="black" 
                      style = {styles.drop_icon1}  />
          </View>
          <View style = {styles.city_selection}>
            <Text style = {styles.city_text}>鄉 / 鎮 / 市 / 區</Text>
            <Entypo name="chevron-small-down" size={20} color="black" 
                      style = {styles.drop_icon2}  />
          </View>
          <View style = {styles.search_button}>
            <Button 
              backgroundColor='#03A9F4'
              title='搜尋'
              onPress={() => this.goToPageTwo()}
              />
          </View>
      </View>
      </ScrollView>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
  },
  search_box:{ 
    borderRadius:5,
    flexDirection:'row',
    width:320,
    height:40,
    backgroundColor:'#dddddd',
  },
  search_icon:{
    margin:10,
    marginLeft:5,
    marginRight:5,
    justifyContent:'flex-start',
  },
  text_input:{
    height: 30,
    width:250,
    borderColor: 'gray',
    margin:5,
  },
  delete_icon:{
    margin:12,
    marginLeft:5,
    justifyContent:'flex-end',
  },
  search_button:{
    flex: 1,
    marginTop:10,
  },
  line:{
    width:320,
    height:1,
    margin:20,
    backgroundColor:'rgba(0,0,0,0.2)',
  },
  city_selection:{
    borderRadius:5,
    flexDirection:'row',
    width:320,
    height:40,
    backgroundColor:'#dddddd',
    margin:5,
  },
  drop_icon1:{
    margin:10,
    marginLeft:234,
  },
  drop_icon2:{
    margin:10,
    marginLeft:180,
  },
  city_text:{
    margin:10,
  },
});

export default Search;