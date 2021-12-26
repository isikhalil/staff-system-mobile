import { Action, ActionType } from "../actionTypes/index";

export interface Staff {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  department: string;
  birthDate: Date;
  email: string;
}

export interface StaffEditModel {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  department: string;
  birthDate: Date;
  email: string;
}
export interface StaffFilterModel {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  department: string;
  birthDate: Date;
  email: string;
  province: string;
  startDate: Date;
}

interface State {
  staffs: Staff[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  staffs: [],
  loading: false,
  error: null,
};

const staffReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_POST_STAFFS_PENDING:
      return {
        loading: true,
        staffs: [],
        error: null,
      };
    case ActionType.GET_POST_STAFFS_SUCCESS:
      return {
        loading: false,
        staffs: action.payload,
        error: null,
      };
    case ActionType.GET_POST_STAFFS_FAIL:
      return {
        loading: false,
        error: action.payload,
        staffs: [],
      };
    default:
      return state;
  }
};

export default staffReducer;
