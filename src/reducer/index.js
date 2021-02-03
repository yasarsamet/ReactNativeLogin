import {combineReducers} from 'redux';
import kimlikdogrulamareducer from './kimlikdogrulamareducer';
import hastakayıtreducer from './hastakayıtreducer';

export default combineReducers({
    kimlikdogrulamaresponse:kimlikdogrulamareducer,
    hastakayıtresponse:hastakayıtreducer    
});