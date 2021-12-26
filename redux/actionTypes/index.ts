import { Staff } from "../reducers/index";

export enum ActionType {
  GET_POST_STAFFS_PENDING = "GET_POST_STAFFS_PENDING",
  GET_POST_STAFFS_SUCCESS = "GET_POST_STAFFS_SUCCESS",
  GET_POST_STAFFS_FAIL = "GET_POST_STAFFS_FAIL",
}

interface actionPending {
  type: ActionType.GET_POST_STAFFS_PENDING;
}

interface actionSuccess {
  type: ActionType.GET_POST_STAFFS_SUCCESS;
  payload: Staff[];
}

interface actionFail {
  type: ActionType.GET_POST_STAFFS_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
