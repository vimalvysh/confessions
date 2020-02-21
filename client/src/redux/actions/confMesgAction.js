import axios from "axios";
import {
  GET_CONFMESG,
  ADD_CONFMESG,
  DEL_CONFMESG,
  REPORT_COMMENT,
  LOADING
} from "../actionTypes/index";

export const getMesgs = () => dispatch => {
  dispatch(setLoading());
  axios.get("/confessionMesg/allMesg").then(res =>
    dispatch({
      type: GET_CONFMESG,
      payload: res.data
    })
  );
};

export const addMesg = mesg => dispatch => {
  dispatch(setLoading());
  axios.post("/confessionMesg/addMesg", mesg).then(res =>
    dispatch({
      type: ADD_CONFMESG,
      payload: res.data
    })
  );
};

export const delMesg = delId => dispatch => {
  axios.post(`/confessionMesg/deleteMesg/${delId}`).then(res =>
    dispatch({
      type: DEL_CONFMESG,
      payload: delId
    })
  );
};

export const addReportComment = (id, comment) => dispatch => {
  axios.post(`/confessionMesg/reportMesg/${id}`, comment).then(res => {
    dispatch({
      type: REPORT_COMMENT
      // payload: res.data
    });
  });
};

export const setLoading = () => ({
  type: LOADING
});
