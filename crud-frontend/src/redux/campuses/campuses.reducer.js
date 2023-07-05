import CampusesActionType from "./campuses.types";

export const INITIAL_CAMPUS_STATE = {
    allCampuses: [],
    singleCampus: {},
}

const campusReducer = (state = INITIAL_CAMPUS_STATE, { type, payload }) => {
    console.log('CAMPUSREDUCER IS HANDLING FETCH ALL CAMPUSES ACTION')
    switch (type) {
        case CampusesActionType.FETCH_ALL_CAMPUSES:
            return { ...state, allCampuses: payload };
        case CampusesActionType.FETCH_SINGLE_CAMPUS:
            return { ...state, singleCampus: payload };
        default:
            return state;
    }
}

export default campusReducer;