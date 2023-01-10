<template>
    <header>
        <div class="emp-router-link">
            <nav>
                <router-link
                    v-for="{path,name} in links"
                    :key="name"
                    :to="path"
                >
                    {{ name }}
                </router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name : 'EmployeeHeader',
    data() {
        return {
            links: [
                {path: "/", name: "Add Employee"},
                {
                    path: "/list-employee", name: "List Employee"
                },
            ],
            title: "Employee Details",
        }
    }
}
</script>