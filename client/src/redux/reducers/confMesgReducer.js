import {
  GET_CONFMESG,
  ADD_CONFMESG,
  DEL_CONFMESG,
  REPORT_COMMENT,
  LOADING
} from "../actionTypes/index";

const initialState = {
  confMesgs: [],
  loading: false
};

export default function confMesgReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONFMESG:
      return {
        ...state,
        confMesgs: action.payload,
        loading: false
      };
    case ADD_CONFMESG:
      return {
        ...state,
        confMesgs: [action.payload, ...state.confMesgs],
        loading: false
      };
    //   return state;

    case DEL_CONFMESG:
      return {
        ...state,
        confMesgs: state.confMesgs.filter(mesgs => mesgs._id !== action.payload)
      };

    case REPORT_COMMENT:
      return {
        ...state
        // confMesgs: [action.payload]
      };

    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
