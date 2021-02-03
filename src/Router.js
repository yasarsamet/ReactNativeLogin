import React from 'react';
import {Scene,Router,Actions} from 'react-native-router-flux';
import Login from './Login';
import Main from './components/Main'
import hastakayıt from './components/hastakayıt';

//initial eklersek scenenin sonuna açılır açılmaz bu sayfayı çalıstır demek isteriz

const Routercomponent =()=>{
    return(
    <Router sceneStyle={{marginTop:80}}>    
        <Scene key="kimlik"> 
            <Scene key="login" 
            onRight={()=>Actions.add()}
            rightTitle="Hasta Kayıt" //sağ üst kısımında Hasta Kayıt isiminde bir text tanımladık onclick özelliği var
            component={Login} //Login.js kullanıcak 
            title="Giriş Ekranı"/>
            <Scene key="add"
                component={hastakayıt}
                title="Hasta Kayıt Ol"/>
        </Scene>

        <Scene key="main">         
            <Scene key="logine" component={Main} title="Main Login olduktan sonra"/>  
        </Scene> 
       
    </Router>
    );
};
    export default Routercomponent;