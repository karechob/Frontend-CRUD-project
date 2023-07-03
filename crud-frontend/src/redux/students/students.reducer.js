import StudentsActionType from "./students.types";

export const INITIAL_STUDENTS_STATE = {
    allStudents: [],
}

const studentReducer = (state = INITIAL_STUDENTS_STATE, {type, payload} ) => {
    console.log('STUDENTREDUCER IS HANDLING FETCH ALL STUDENTS ACTION')
    switch(type) {
        case StudentsActionType.FETCH_ALL_STUDENTS:
        return {...state, allStudents: payload};
        default:
            return state;
    }
}

export default studentReducer