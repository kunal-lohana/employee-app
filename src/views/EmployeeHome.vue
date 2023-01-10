<template>
    <employee-header></employee-header>
    <router-view></router-view>
    <employee-footer></employee-footer>
</template>

<script>
import EmployeeHeader from "@/views/EmployeeHeader.vue";
import EmployeeFooter from "@/views/EmployeeFooter.vue";
export default {
    name: "EmployeeHome",
    components: {
        // EmployeeHeader: () => import("./EmployeeHeader.vue"),
        // EmployeeFooter: () => import("./EmployeeFooter.vue"),
        EmployeeHeader,
        EmployeeFooter
    }
    
}
</script>