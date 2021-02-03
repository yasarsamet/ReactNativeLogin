import React , {Component} from 'react';
import firebase from 'firebase';
import { View, Picker, Dimensions, TextInput, Text} from 'react-native';
import {connect} from 'react-redux' // sarmalamak için bunu yazmayı unutma 
import {Card,CardSection,Button,Spinner} from './index' ;
import {hastakayıt2,hastakayıtetme} from '../actions/hastakayıtaction'   //hastakayıt koyduk çünkü hastakayıtaction sınıfındaki metod ile aynı isimde olucak

const {width,height}=Dimensions.get('window') //ekranın boyutunu aldık 
class hastakayıt extends Component{        
        clicksave() {
          const {email,sifre,name,surname,phone,gender} = this.props;
          this.props.hastakayıtetme({email,sifre,name,surname,phone,gender});
                         
         }  
         renderButton() {
          if (!this.props.loading) {
            return <Button onPress={this.clicksave.bind(this)}>Kaydet</Button>;
            //return <Button onPress={this.clickLogin.bind(this)}> giriş </Button>;
          }
          return <Spinner size="small" />;
        }
    render(){
      const { inputStyle } = styles;
        return (
                <View>
                  <TextInput
                    placeholder="Email"
                    style={inputStyle}
                    value={this.props.email}
                    onChangeText={email => this.props.hastakayıt2({props:'email' ,value:email})}/>
                   <TextInput
                    secureTextEntry
                    placeholder="Şifre"
                    style={inputStyle}
                    value={this.props.sifre}
                    onChangeText={sifre => this.props.hastakayıt2({props:'sifre' ,value:sifre})}/>
                    <TextInput
                      placeholder="İsim"
                      style={inputStyle}
                      value={this.props.name}
                      onChangeText={name => this.props.hastakayıt2({props:'name' ,value:name})}/>
                      <TextInput
                      placeholder="Soyisim"
                      style={inputStyle}
                      value={this.props.surname}
                      onChangeText={surname => this.props.hastakayıt2({props:'surname' ,value:surname})}/>
                  <TextInput                    
                    placeholder="Telefon Numarası"
                    style={inputStyle}
                    keyboardType={'numeric'}
                    value={this.props.phone}
                    onChangeText={phone => this.props.hastakayıt2({props:'phone' ,value:phone})}/>
                    <Picker 
                        selectedValue={this.props.gender}
                        style={{width:width-40,marginLeft:20}}
                        onValueChange={gender => this.props.hastakayıt2({props:'gender', value:gender})}>
                          <Picker.Item label="Cinsiyet" value="0" />
                          <Picker.Item label="Erkek" value="erkek" />
                          <Picker.Item label="Bayan" value="bayan" />
                    </Picker>
                    <CardSection>
                      {this.renderButton()}
                    </CardSection>
                  </View>
              );
    }
}
const styles = {
        inputStyle: {
            marginLeft:20,    
            marginTop:10,
            width:width-40,
            padding:10,
            height:40,
            fontSize:12,
            backgroundColor:'#f5f5f4',
            borderRadius:4
          }
        };

const mapToStateProps =({hastakayıtresponse})=>{
    const {email,sifre,name,surname,phone,gender,loading} = hastakayıtresponse;
    return {email,sifre,name,surname,phone,gender,loading};
};

export default connect(mapToStateProps,{hastakayıt2,hastakayıtetme})(hastakayıt);//connect yapısı ile sarmaladık.