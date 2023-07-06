import CampusesActionType from "./campuses.types";

export const INITIAL_CAMPUS_STATE = {
    allCampuses: [],
    singleCampus: {},
    newCampus:{},
}

const campusReducer = (state = INITIAL_CAMPUS_STATE, { type, payload }) => {
    console.log('CAMPUSREDUCER IS HANDLING FETCH ALL CAMPUSES ACTION')
    switch (type) {
        case CampusesActionType.FETCH_ALL_CAMPUSES:
            return { ...state, allCampuses: payload };
        case CampusesActionType.FETCH_SINGLE_CAMPUS:
            return { ...state, singleCampus: payload };
        case CampusesActionType.ADD_CAMPUS:
            return { ...state, newCampus: payload };
        case CampusesActionType.REMOVE_CAMPUS:
            return { ...state, singleCampus: null };
        case CampusesActionType.UPDATE_CAMPUS:
            return {...state, singleCampus: payload }
        default:
            return state;
    }
}

export default campusReducer;