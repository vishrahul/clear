import React, {Component} from 'react'
import { View, StyleSheet,Text } from 'react-native'
import VideoPlayer from 'react-native-video-controls'

console.disableYellowBox = true;


export default class App extends React.Component {


  constructor(){
    super();

    this.state={

      url:""

    }
  }
 
  get_url  = async () => {

    var that =this
    that.setState({
      url:"https://content.jwplatform.com/manifests/yp34SRmf.m3u8"
    })

  }



  get_url2= async () => {

   var that =this
   that.setState({
      url:"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
    }) 

  }



  get_url3= async () => {

    var that =this
    that.setState({
      url:"https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
    })


   
  }




  render () {
    return (

      <View style={styles.view_style}>

       <VideoPlayer
        style={styles.video_style}
        source={{uri: this.state.url}}
       /> 


      <View style={{flex:1,flexDirection:'row'}}>

       <Text style={styles.text_style} onPress={this.get_url} >Video1</Text>
       <Text style={styles.text_style} onPress={this.get_url2} >Video2</Text>
       <Text style={styles.text_style} onPress={this.get_url3} >Video3</Text>
      

      </View>
      

     
      </View>

      
    )
  }
}






var styles = StyleSheet.create({

  view_style: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor:"#000000",
    right: 0,
  

  },

  text_style:{
    width:'32%',
    textAlign:'center',
    alignContent:'center',
    height:'14%',
    marginLeft:5,
    backgroundColor:"#ffffff",
    color:"#000000",
  }




});