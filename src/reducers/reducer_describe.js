import {FETCH_SOBJECT_DESCRIPTIONS} from '../actions/index';

export default function (state = [], action) {

    if (action.error) {
        action.type = 'HANDLE_XHR_ERROR';
        console.log('error');
      }

    switch(action.type) {
        case FETCH_SOBJECT_DESCRIPTIONS:
            return action.payload.data;
    }
    return state;
}