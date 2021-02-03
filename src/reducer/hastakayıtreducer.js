import {HASTA_EKLE,CREATE_REQUEST_SUCCES,CREATE_REQUEST,HASTA_EKLE_ERROR} from '../actions/type';

const INITIAL_STATE={
    email:'',
    sifre:'',
    name:'',
    surname:'',
    phone:'',
    gender:'',
    loading:false
}
export  default (state=INITIAL_STATE,action)=>{
    switch(action.type){
            case HASTA_EKLE:
                return {...state,[action.payload.props]:action.payload.value};
            case CREATE_REQUEST:
                return {...state,loading:true};
            case CREATE_REQUEST_SUCCES:
                return {...state,loading:false};
            case HASTA_EKLE_ERROR:
               return {...state,loading:false};
            default :
                return state;
    }
};