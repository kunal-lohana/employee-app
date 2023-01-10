<template>
    <div class="add-emp">
        <form @submit.prevent="addEmployeeDetails()" class="emp-form-container" autocomplete="off">
            <div class="emp-title field">
                <h3>{{ title }}</h3>
            </div>
            <div class="emp-error field" v-if="!error.err">
                <span>{{ error.text }}</span>
            </div>
            <div class="emp-name field row">
                <label for="emp-name" class="col-sm-3">Name</label>
                <div class="emp-input-field col-sm-7">
                    <input type="text" name="emp-name" required id="emp-name" v-model="empName"  placeholder="Enter your username">
                </div>
            </div>
            <div class="emp-email field row">
                <label for="emp-email" class="col-sm-3">Email</label>
                <div class="emp-input-field col-sm-7">
                    <input type="email" name="emp-email" required  id="emp-email" v-model="empEmail" autocomplete="off" placeholder="email@example.com">
                </div>
            </div>
            <div class="emp-password field row">
                <label for="emp-password" class="col-sm-3">Password</label>
                <div class="emp-input-field col-sm-7">
                    <input @input="error.err = true" type="password" name="emp-password" required  id="emp-password" v-model="empPassword" placeholder="Enter a password" autocomplete="new-password">
                </div>
            </div>
            <div class="emp-password_confirmation field row">
                <label for="emp-password_confirmation" class="col-sm-3">Confirm Password</label>
                <div class="emp-input-field col-sm-7">
                    <input type="password" required name="emp-password_confirmation" id="emp-password_confirmation" v-model="empPasswordConfirmation"  placeholder="Re-type password"
                    @blur="confirmPassword">
                </div>
            </div>
            <div class="emp-gender field row">
                <label for="emp-gender" class="col-sm-3">Gender</label>
                <div class="emp-input-field col-sm-6">
                    <div class="row">
                        <div class="col-sm-6">
                            <input type="radio" name="gender" id="gender-male" value="male" v-model="empGender">
                            <label for="male" class="emp-input-radio">Male</label>
                        </div>
                        <div class="col-sm-6">
                            <input type="radio" name="gender" id="gender-female" value="female" v-model="empGender">
                            <label for="female" class="emp-input-radio">Female</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="emp-file-upload field row">
                <label for="upload-photo" class="col-sm-3">User Image</label>
                <input type="file" name="emp-file" id="emp-file" class="col-sm-7" ref="uploadFile"
                    accept="image/png, image/gif, image/jpeg, image/jpg"
                    @change="previewFiles"
                >
            </div>
            <div class="emp-submit field row">
                <div class="col-sm-5">
                    <input type="submit" :disabled="!error.err" value="Submit" class="col-sm-12">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "AddEmployee",
    data() {
        return {
            title: "Add Employee",
            empDetails: {},
            empName: "",
            empEmail: "",
            empGender: "",
            empPhoto: {},
            empUniqueId: "",
            empPassword: "",
            empPasswordConfirmation: "",
            error: {},
            empId: "",
        }
    },
    mounted() {
        this.empId = this.$route.query.empId;
        this.empDetails = this.empId && this.getEmployeeDetails(this.empId);
        if (this.empDetails && Object.keys(this.empDetails)) {
            this.setValueInModel();
        }
    },
    computed: {
        ...mapGetters(["getEmployeeDetails"]),
    },
    methods: {
        ...mapActions(["addEmployee", "updateEmployee"]),
        confirmPassword() {
            const obj = (this.empPassword === this.empPasswordConfirmation);
            if(!obj) {
                this.error = { err: obj, text: 'Password not match!'};
                this.empPassword=""; this.empPasswordConfirmation="";
            }
        },
        getUniqueId() {
            return JSON.stringify(Math.random()).substr(length-6);
        },
        setValueInModel() {
            const { id, name, email, gender } = this.empDetails;
            this.empUniqueId = id;
            this.empName = name;
            this.empEmail = email;
            this.empGender = gender;
            // this.empPhoto = photo.file;
        },
        // validateFields(data) {
        //     const {name, email, gender, photo, password}
        // },  
        addEmployeeDetails() {
            const empDetails = {
                name: this.empName,
                id: this.empUniqueId || this.getUniqueId(),
                email: this.empEmail,
                gender: this.empGender,
                photo: this.empPhoto,
                password: this.empPassword,
            };
            // this.validateFields(empDetails);
            this.empId ? this.updateEmployee(empDetails) : this.addEmployee(empDetails);
            this.clearEmployeeDetails();
        },
        previewFiles(event) {
            const files = event.target.files;
            const fileReader = new FileReader();
            fileReader.addEventListener("load", () => {
                this.imageUrl = fileReader.result;
            })
            fileReader.readAsDataURL(files[0]);
            this.empPhoto = {
                file: files[0],
                srcImage: fileReader
            }
        },
        clearEmployeeDetails() {
            this.empName="";
            this.empEmail="",
            this.empGender="";
            this.empUniqueId="";
            this.empPasswordConfirmation= "";
            this.empPassword= "";
            this.$refs.uploadFile.value=null;
        }
    },
}
</script>