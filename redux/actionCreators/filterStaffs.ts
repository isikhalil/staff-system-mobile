import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";

export const filterStaffs = (
  titleId: number,
  provinceId: number,
  minAge: number
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_POST_STAFFS_PENDING,
    });

    try {
      const { data } = await axios.get(
        `http://95.111.234.115/Staff/Filter?titleId=${titleId}&provinceId=${provinceId}&minAge=${minAge}`
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
