import {EMAİL_CHANGED,PASSWORD_CHANGED,LOGİN_USER,LOGİN_USER_SUCCES,LOGİN_USER_FAİL} from '../actions/type';


const INITIAL_STATE ={
    email:'',
    password:'',
    loading:false
};

export  default (state=INITIAL_STATE,action)=>{
        switch(action.type){
                case EMAİL_CHANGED:
                    return {...state,email:action.payload};
                case PASSWORD_CHANGED:
                    return {...state,password:action.payload};
                case LOGİN_USER:
                    return {...state,loading:true};
                case LOGİN_USER_SUCCES:
                    return {...state,loading:false};
                case LOGİN_USER_FAİL:
                    return {...state,loading:false};
                default :
                    return state;
        }
};