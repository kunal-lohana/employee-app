<template>
    <div class="list-employee">
        <div class="emp-not-found" v-if="!employeeData.length">
            <h3>No Record Found</h3>
        </div>
        <div class="emp-list" v-else>
            <h3>Employee Records</h3>
            <div class="emp-record-card">
                <div class="container">
                    <div class="row mb-2"
                    v-for="({photo, name, email, id}, index) in employeeData" 
                    :key="index">
                    <div class="col-sm-3 align-center">
                        <img :src="photo.srcImage.result"
                        :alt="photo.file.name" class="emp-image">
                    </div>
                    <div class="col-sm-5 align-center">
                        <div class="row">
                            <div class="col-sm-12">{{ name }}</div>
                            <div class="col-sm-12">{{ email }}</div>
                        </div>
                    </div>
                    <div class="col-sm-2 emp-update align-center">
                        <button @click="updateEmployee(id)">Update</button>
                    </div>
                    <div class="col-sm-2 emp-delete align-center">
                        <button @click="delEmployee(index)">Delete</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: "EmployeeList",
    computed: {
        ...mapState(["employeeData"]),
    },
    methods: {
        ...mapActions(["deleteEmployee"]),
        updateEmployee(id) {
            this.$router.push({
                name: "AddEmployee",
                query: { empId: id}
            })
        },
        delEmployee(index) {
            this.deleteEmployee(index)
        }
    }
}
</script>