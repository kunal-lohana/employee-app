const actions = {
    addEmployee({commit}, payload) {
        commit("ADD_EMPLOYEE", payload)
    },
    updateEmployee({commit}, payload) {
        commit("UPDATE_EMPLOYEE", payload)
    },
    deleteEmployee({commit}, payload) {
        commit("DELETE_EMPLOYEE", payload)
    },

}

export default actions;