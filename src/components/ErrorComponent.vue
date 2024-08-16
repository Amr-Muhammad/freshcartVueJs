<template>
    <div class="vh-100 d-flex justify-content-center align-items-center flex-column">
        <img class="w-75" src="../assets/3747371.jpg" alt="">
        <button @click="goBack()" class="btn btn-outline-dark">Go back to login..</button>
    </div>
</template>

<script>
export default {

methods:{
    goBack(){
        this.$router.push('/login')
    }
}

}
</script>

<style scoped></style>