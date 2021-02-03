import React, { Component } from 'react';
import { View, TextInput, Dimensions, AsyncStorage , Text, Image, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import {connect} from 'react-redux';  //redux kullanırken bu connect complementini dahil etmeyi unutma
import {emailChanged,passwordChanged,loginuser} from './actions/index';
import {Card,CardSection,Spinner,Button} from './components/index' ;
import { Header } from 'react-native/Libraries/NewAppScreen';

const {width,height}=Dimensions.get('window')//ekranın boyutunu aldık

class Login extends Component {
  state ={ email:'',password:'',loading:false};//state tanımladık  
  clickLogin(){
    const { email, password } = this.props;
    this.props.loginuser({email,password});
  }  
  renderButton(){
    if (!this.props.loading) {
      return  <Button onPress={this.clickLogin.bind(this)}> GİRİŞ </Button>;
      //return <Button onPress={this.clickLogin.bind(this)}> giriş </Button>;
    }
    return <Spinner size="small"/>;
  }
  render() {
   /* console.log('anlık mail ' + this.props.email);
    console.log('anlık password ' + this.props.password);*/
    const {inputStyle,ımagestyle}=styles;
    return(
      <View style={{ flex: 1,backgroundColor:'white'}}>
       <Image
        style={styles.tinyLogo}
        source={require('./assets/image.png')}
        resizeMode="center"
      />
          <TextInput
            placeholder="Email"
            style={inputStyle}
            value={this.props.email}
            onChangeText={email => this.props.emailChanged(email)}/>          
        <TextInput
          secureTextEntry
          placeholder="Şifre"
          style={inputStyle}
          value={this.props.password}
          onChangeText={password=>this.props.passwordChanged(password)}/>          
        <CardSection>
          {this.renderButton()}
        </CardSection>        
        </View>
    );
  }
}
const styles={
inputStyle:{
    marginLeft:20,    
    marginTop:10,
    width:width-40,
    padding:10,
    height:40,
    fontSize:12,
    backgroundColor:'#f5f5f4',
    borderRadius:4
  },
  tinyLogo:{
    width:150,
    height:150,
    marginLeft:120,
    borderRadius:40,
    marginBottom:10
  },ımagestyle:{
    width:120,
    height:150,
    marginLeft:135,
    borderRadius:60,
  }
};
const mapStateToProps=({kimlikdogrulamaresponse})=>{
  const {email,password,loading}=kimlikdogrulamaresponse;
  return {email,password,loading};
};
export default connect(mapStateToProps,{emailChanged,passwordChanged,loginuser})(Login);
