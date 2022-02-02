import { ActionTypes } from "../contains/action-types";

const initialState = {
    products: [{
        id: 1,
        title: 'Product 1',
        description: 'Product 1 description',
    }],
};

export const productReducer = (state=initialState ,{type,payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}



