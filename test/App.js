import React, {Component} from 'react';
import {Text, View, StyleSheet,Platform,TextInput,Button,Image,FlatList} from 'react-native';
export default class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
        MonHoc :[
            {
              "id":1,
              "TenMon":"Android",
              "NganhHoc":"CNTT",
              "image" : [
                  {
                      "url":"https://regmedia.co.uk/2016/09/20/android_logo.jpg?x=442&y=293&crop=1"
                  }
                ]
            },
            {
              "id":2,
              "TenMon":"AnToanWeb",
              "NganhHoc":"CNTT",
              "image" : [
                  {
                      "url":"https://regmedia.co.uk/2016/09/20/android_logo.jpg?x=442&y=293&crop=1"
                  }
              ]
            },
            {
              "id":3,
              "TenMon":"MangMayTinh",
              "NganhHoc":"CNTT",
              "image" : [
                  {
                      "url":"https://regmedia.co.uk/2016/09/20/android_logo.jpg?x=442&y=293&crop=1"
                  }
              ]
            },
            {
              "id":4,
              "TenMon":"LapTrinhHuongDoiTuong",
              "NganhHoc":"KHMT",
              "image" : [
                  {
                      "url":"https://webmax.vn/wp-content/uploads/2018/07/L%E1%BA%ADp-tr%C3%ACnh-h%C6%B0%E1%BB%9Bng-%C4%91%E1%BB%91i-t%C6%B0%E1%BB%A3ng.png"
                  }
              ]
            },
            {
              "id":5,
              "TenMon":"Toan Cao Cap",
              "NganhHoc":"KTPM",
              "image" : [
                  {
                      "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXDaN6gIwG_79cKQRTMBVvY45gQNiCIgojLX0j0T5Rvb35e90"
                  }
              ]
            }
        ]
    };
  }
  render(){
    const {navigation} = this.props;
    const {MonHoc} = this.state;
    return(
      <FlatList
      data={MonHoc}
      renderItem={({item}) => 
        <View style={styles.container}>
          <View style={styles.HinhAnh}>
            <Image style={styles.image} source={{uri:item.image[0].url}}/>
          </View>
          <View style={styles.ChiTiet}>
            <View style={styles.MonHoc}>
                <Text style={styles.title}>Tên Môn : {item.TenMon}</Text>
            </View>
            <View style={styles.NganhHoc}>
                <Text style={styles.title}>Tên Ngành : {item.NganhHoc}</Text>
            </View>
          </View>
        </View>
      }/>
    );
  }
}
const styles = StyleSheet.create({
  container : {
    flex:1,
    flexDirection:'row',
    paddingLeft:30,
    padding:10,
    marginTop:3,
    marginBottom:3,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  image : {
    width:50,
    height:50,
  },
  ChiTiet : {
    marginLeft:20
  },
  MonHoc : {
    marginBottom:10
  }

});