import { AUTHOR } from '../../const';
import img from '../../image/ava.jpg';

const initialState = {
    name: AUTHOR.HUMAN,
    email: 'mail@mail.ru',
    phone: '+79999999999',
    img       
}

export const profileReducer = (state = initialState, action) => {

    switch(action.type){
        default:{
            return state
        }

    }

}