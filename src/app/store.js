
import {createStore, compose} from 'redux';
import { rootReducer } from '../reducer/rootReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
}   
// const commonData = {
//   user:{
//     items:[{
//       id:0,
//       name:'test',
//       email:'test@gmail.com',
//       password:'test123',
//       age:"18",
//       phoneno:"95949395291"
//     },{
//       id:1,
//       name:'dummy',
//       email:'dummy@gmail.com',
//       password:'dummy123',
//       age:"18",
//       phoneno:"12131546152"
//     }],
//     auth:false,
    
//     Loged_in_user:{
//       id:'',
//       name:'',
//       email:'',
//       password:'',
//       age:"",
//       phoneno:""
//     }
//   },
// }

const persistedReducer = persistReducer(persistConfig,rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer,composeEnhancers())

const persistor = persistStore(store);
export   { store , persistor }


