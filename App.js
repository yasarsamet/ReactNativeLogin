/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import {
  StyleSheet,AsyncStorage, Text, View,TouchableOpacity
} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import Login from './src/Login';
/*import Header from './src/components/Header';
import CardSection from './src/components/CardSection';
import Spinner from './src/components/Spinner';
import Button from './src/components/Button';*/
import {Card,CardSection,Spinner,Button,Header} from './src/components/index' ;
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './src/reducer';
import Router from './src/Router';

class Apps extends Component{
  state = { loggedIn: null };
componentWillMount(){
  var firebaseConfig = {
    apiKey: "AIzaSyAPNt4c04fIM2iYFaHtWUV-fDsnFtf1Ibk",
    authDomain: "deneme-d5e81.firebaseapp.com",
    databaseURL: "https://deneme-d5e81.firebaseio.com",
    projectId: "deneme-d5e81",
    storageBucket: "deneme-d5e81.appspot.com",
    messagingSenderId: "888673623718",
    appId: "1:888673623718:web:591bbe0af44d0a83149e67"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
firebase.auth().onAuthStateChanged((user) => {
  if (user) { // kullanıcının giriş yapıp yapmadığını kontrol ediyoruz
    this.setState({ loggedIn: true });
  } else {
    this.setState({ loggedIn: false });
  }
});
}
clickLogout(){
  firebase.auth().signOut();
}
renderContent() {
  switch(this.state.loggedIn){
    case true:
    return(
      <CardSection>
        <Button onPress={this.clickLogout.bind(this)}>ÇIKIŞ</Button>
      </CardSection>
    );
    case false:
      return (
       <Router/>
    );  
    default:
     return (
       <View>
        <Spinner size="large" />
       </View>
     );
  }
}
render(){  
  const store = createStore(reducer,{},applyMiddleware(ReduxThunk)); 
  return(
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}
}
const styles={
  hastakayıtol:{    
    marginLeft:300,
    color:'black'
  }
}
export default Apps;