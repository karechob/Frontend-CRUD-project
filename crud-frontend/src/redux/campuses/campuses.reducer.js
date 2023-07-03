import CampusesActionType from "./campuses.types";

export const INITIAL_CAMPUS_STATE = {
    allCampuses: [],
}

const campusReducer = (state = INITIAL_CAMPUS_STATE, {type, payload} ) => {
    console.log('CAMPUSREDUCER IS HANDLING FETCH ALL CAMPUSES ACTION')
    switch(type) {
        case CampusesActionType.FETCH_ALL_CAMPUSES:
        return {...state, allCampuses: payload};
        default:
            return state;
    }
}

export default campusReducer