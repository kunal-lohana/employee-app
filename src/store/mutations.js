const mutations = {
    ADD_EMPLOYEE(state, payload) {
        const data = [...state.employeeData];
        data.push(payload);
        state.employeeData = data;
    },
    DELETE_EMPLOYEE(state, payload) {
        const data = [...state.employeeData];
        data.splice(payload, 1);
        state.employeeData = data;
    },
    UPDATE_EMPLOYEE(state, payload) {
        const data = [...state.employeeData];
        const getIndex = data.findIndex(({id}) => id === payload.id);
        const updatedObj = [
            ...data.slice(0,getIndex),
            payload,
            ...data.slice(getIndex+1)
        ];
        state.employeeData = updatedObj;
        console.log(state, payload);
    }
}

export default mutations;