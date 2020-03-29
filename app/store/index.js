import {CreateStore, createStore} from 'redux';
import cartItems from '../reducers/cartItems';

export default store= createStore(cartItems);