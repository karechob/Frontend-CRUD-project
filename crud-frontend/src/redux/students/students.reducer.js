import StudentsActionType from "./students.types";

export const INITIAL_STUDENTS_STATE = {
    allStudents: [],
    singleStudent: null,
}

const studentReducer = (state = INITIAL_STUDENTS_STATE, {type, payload} ) => {
    console.log('STUDENTREDUCER IS HANDLING FETCH ALL STUDENTS ACTION')
    switch(type) {
        case StudentsActionType.FETCH_ALL_STUDENTS:
        return {...state, allStudents: payload};
        case StudentsActionType.FETCH_SINGLE_STUDENT:
        return {...state, singleStudent: payload};
        default:
            return state;
    }
}

export default studentReducer