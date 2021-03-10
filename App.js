import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class RedButton extends Component {

  sosAlert=()=>{
    alert("PLAYING  SOUND.........")
  }
  render(){
    return(
      <Button color={this.props.mycolor} title="SONG-1" onPress={this.sosAlert}/>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop:80,width:200,height:100}}>
        <RedButton mycolor="red" />
        <Text>PRESS ON BUTTON TO PLAY SONG.......</Text>
        <RedButton mycolor="blue" />
        <Text>PRESS ON BUTTON TO PLAY SONG.......</Text>
        <RedButton mycolor="green" />
        <Text>PRESS ON BUTTON TO PLAY SONG.......</Text>
          <RedButton mycolor="" />
        <Text>PRESS ON BUTTON TO PLAY SONG.......</Text>
      </View>
     
    
     
    );
  }
}
