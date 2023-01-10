const getters = {
    getEmployeeDetails: (state) => (empId) => {
        return (state.employeeData.filter(({id}) => id === empId)[0]) || null;
    }
}
export default getters;