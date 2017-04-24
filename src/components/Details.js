import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';



  // goToPageTwo = () => {
  //   this.props.navigation.navigate('Maps');
  // };


const Details = (props) => {
  const { company,
        city,
        district,
        address,
        phone,
        person
  } = props.navigation.state.params;

  const { boldFont, item, title, follow, followbtn, pic, img, btn,  maptitle, mapbtn, icon } = styles;

  //const {navigate} =this.props.navigation;



  return (
    <ScrollView>
      <Card>
        <View style={[item,title]}>
        <Text style={[boldFont]}>{company}</Text>

        <View style={[btn]}>
        <TouchableOpacity style={[followbtn]}
        >
        <View style={[follow,title]}>
          <FontAwesome name={'heart-o'} size={16} style={{ marginTop: 2, marginRight: 4, color:'white' }}/>
          <Text style={{color:'#fff'}}>關注</Text>
        </View>
        </TouchableOpacity>
        </View>

        </View>

      
        <View style={[item]}>
          <View style={[item]}>
        <Text>地址：</Text>
        <Text>{address}</Text>
        </View>

        <View style={[item]}>
          <TouchableOpacity style={[followbtn]}
          //onPress={() =>  navigate('Maps')}
          >
          <View style={[follow, maptitle]}>
            <FontAwesome name={'map-marker'} size={16} style={[icon]}/>
            <Text style={{color:'#fff'}}> 在Google Map打開</Text>
          </View>
          </TouchableOpacity>
        </View>
        </View>


        <View style={[item,title]}>
          <View>
        <Text>連絡電話：</Text>
        <Text>{phone}</Text>
        </View>

        <View style={[btn]}>
        <TouchableOpacity style={[followbtn]}
        >
        <View style={[follow,title]}>
          <FontAwesome name={'phone'} size={20} style={[icon]}/>
        </View>
        </TouchableOpacity>
        </View>
        </View>

        <View style={[item]}>
        <Text>負責人：</Text>
        <Text>{person}</Text>
        </View>

         <View style={[item]}>
            <Text>環境檢視：</Text>
            <View style={[img]}>
              <View style={[pic]}></View>
              <View style={[pic]}></View>
              <View style={[pic]}></View>
            </View>
        </View>


         <TouchableHighlight  style={[followbtn]}
          onPress={() => Alert.alert(
            'Alert',
           '確定送出此訊息?',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
          )}
        >
              <View style={[follow, maptitle]}>
                <Text style={{color:'#fff',margin:5 ,fontSize:15}}>此機構已不存在</Text>
              </View>

          </TouchableHighlight>
      </Card>

    </ScrollView>
  );
};

const styles = {
  boldFont: {
    fontWeight: 'bold',
    fontSize:18,
    flex:6 
  },
  item: {
    marginBottom:10
  },
  title: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  maptitle: {
    flexDirection:'row',
    justifyContent:'center'
  },
  img: {
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  
  followbtn: {
    backgroundColor: '#03A9F4',
  },
  follow: {
    margin:5,
  },
  pic: {
    height:50,
    width:50,
    backgroundColor: '#5c5c5c',
    margin:5
  },
  btn: {
    height:25,
    marginLeft:15
  },
  mapbtn: {
    justifyContent:'flex-start'
  },
  icon: {
    margin: 2,
    marginLeft: 4,
    marginRight: 4,
    color:'white'
  }
};
export default Details;