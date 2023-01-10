<template>
    <footer class="emp-footer">
        <div>&#169; 2022 {{ copyrightText }}</div>
    </footer>
</template>

<script>
export default {
    name: "EmployeeFooter",
    data() {
        return {
            copyrightText: "all right reseverd"
        }
    }
}
</script>