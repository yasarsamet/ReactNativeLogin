import { Alert } from 'react-native'
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {EMAİL_CHANGED,PASSWORD_CHANGED,LOGİN_USER,LOGİN_USER_SUCCES,LOGİN_USER_FAİL,LOGİN_USER_ADD} from './type';

export const emailChanged = (email) =>{
    return (dispatch) =>{
            dispatch({
                type: EMAİL_CHANGED,
                payload:email
            });
    };
};  
export const passwordChanged = (password) =>{
    return (dispatch) =>{
            dispatch({
                type: PASSWORD_CHANGED,
                payload:password
            });
    };
};
 
export const loginuser =({email,password})=>{   
    return (dispatch)=>{              
        if(email === '' ||password === ''){        
          Alert.alert(
            'Opps',
            'Her iki Alanda Dolu Olmalıdır !',
            [
              {text:'Tamam',onPress:()=>null}
            ]
          );
          }else{  
            dispatch({type:LOGİN_USER_FAİL})          
          firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user=>loginSucces(dispatch,user))
            .catch(()=>loginFail(dispatch))
            }
            /*firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user=>loginSucces(dispatch,user))
            .catch(() => {
              firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user=>loginSucces(dispatch,user))
                .catch(()=>loginFail(dispatch));*/
    };
};
const loginFail =(dispatch)=>{ 
        dispatch({
                type:LOGİN_USER_FAİL
        });
        Alert.alert(
          'Opps',
          'Kimlik Numarası veya Şifre Yanlış !!',
          [
            {text:'Tamam',onPress:()=>null}
          ]
        );
};
const loginSucces = (dispatch,user)=>{
        dispatch({
            type:LOGİN_USER_SUCCES,
            payload:user
        });        
        Actions.main();
};

