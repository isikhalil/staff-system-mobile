import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";
import { StaffEditModel } from "../reducers";

export const createStaff = (model: StaffEditModel) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_POST_STAFFS_PENDING,
    });

    try {
      const { data } = await axios.post(
        `http://95.111.234.115/Staff/Create`,
        model
      );
      console.log(data);
      dispatch({
        type: ActionType.GET_POST_STAFFS_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.GET_POST_STAFFS_FAIL,
        payload: err.message,
      });
    }
  };
};
