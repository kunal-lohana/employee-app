<template>
  <employee-home></employee-home>
</template>

<script>
import EmployeeHome from "@/views/EmployeeHome.vue";
// const EmployeeHome = () => import("../src/views/EmployeeHome.vue")
export default {
  name: "App",
  components: {
    EmployeeHome
  }
}
</script>