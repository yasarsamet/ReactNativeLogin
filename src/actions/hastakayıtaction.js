import firebase from 'firebase';
import { Alert } from 'react-native'
import { Actions } from 'react-native-router-flux';
import {HASTA_EKLE,CREATE_REQUEST_SUCCES,CREATE_REQUEST,HASTA_EKLE_ERROR} from './type';

export const hastakayıt2  =({props,value})=>{
    return (dispatch) =>{
            dispatch({
                type:HASTA_EKLE,
                payload:{props,value}
            });
    };
};

export const hastakayıtetme  =({email,sifre,name,surname,phone,gender})=>{
    const {currentuser} = firebase.auth();
    return (dispatch) =>{
        dispatch({
            type:CREATE_REQUEST
        });
        if(email ===''|| sifre ==='' || name ===''||surname ===''|| phone ==='' || gender ===''){
            Alert.alert(
                'Opps',
                'Lütfen Tüm alanları Doldurunuz !!',
                [
                  {text:'Tamam',onPress:()=>null}
                ]
              );
            dispatch({
                    type:HASTA_EKLE_ERROR
            });
        }else if(gender === 'Cinsiyet'){
            Alert.alert(
                'Uyarı',
                'Lütfen Cinsiyetinizi Seçiniz !!',
                [
                  {text:'Tamam',onPress:()=>null}
                ]
              );
            dispatch({
                    type:HASTA_EKLE_ERROR
            });
        }
        else{
            var rol = 'hasta';
            firebase.auth().createUserWithEmailAndPassword(email,sifre).then(()=>{
                firebase.database().ref(`/hastalar/hasta`).push({email,sifre,name,surname,phone,gender,rol}).then(()=>{
                    dispatch({
                        type:CREATE_REQUEST_SUCCES
                    });
                    Actions.pop(); //pop burda bir önceki sayfa ne ise ona görütürür key yerine pop yazarız.
                })
            }).catch(()=>loginFail(dispatch))
        /*firebase.database().ref(`/hastalar/hasta`).push({email,sifre,name,surname,phone,gender}).then(
            firebase.auth().createUserWithEmailAndPassword(email, sifre).then(()=>{
              dispatch({
                  type:CREATE_REQUEST_SUCCES
              });
            }).catch(()=>loginFail(dispatch))
        );*/
    }
    };
};

const loginFail =(dispatch)=>{ 
    dispatch({
            type:HASTA_EKLE_ERROR
    });
    Alert.alert(
      'Opps',
      'Bu email adresinde kullanıcı var veya Mail Adresinizi doğru yazınız !!',
      [
        {text:'Tamam',onPress:()=>null}
      ]
    );
};