<template>
    <div class="page-not-found">
        <h2>404</h2>
        <p>Page Not Found</p>
        <div class="home-page-link">
            <router-link :to="{name: 'AddEmployee'}">Home</router-link>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.page-not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 10px;
    flex-direction: column;
    .home-page-link{
    border-radius: 11px;
    background: grey;
    font-weight: bold;
    padding: 7px 15px 7px 15px;
    a {
        text-decoration: none;
        color: white;
    }
}
}

</style>
