import C from '../constants/constatnts';

const city = (state = '', action) => {
    switch (action.type) {
        case C.ADD_CITY:
            return {...state, name: action.name};
        case C.DELETE_CITY:
            return '';
        case C.ADD_FORECAST:
            return {...state, forecast: action.forecast};
        default:
            return state;
    }
}

export default city;