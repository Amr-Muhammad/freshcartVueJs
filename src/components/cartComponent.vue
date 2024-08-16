<template>
    <div class="py-5" v-if="userData.cart != ''">
        <div class="py-5">
            <div class="d-flex align-items-center">
                <i class="fa-solid fa-briefcase fa-2x me-2"></i>
                <h2>My Cart</h2>
                <p @click="removerAllCart()" class="m-0 ms-auto text-decoration-underline text-danger cursor">Remove All
                </p>
            </div>
            <hr>
            <div v-for="item in userData.cart" :key="item" class="row ">
                <div class="col-2 text-center">
                    <img class="w-75" :src="item.imageCover" alt="">
                </div>
                <div class="col-6">
                    <p>{{ item.title }}</p>
                    <p class="text-success fs-7 mt-2">In stock "Availability" <span>{{ item.quantity }}</span></p>
                    <p class=" mb-3">Quantity {{ item.amount }}</p>
                    <button class="btn btn-danger">
                        <i class="fa-solid fa-trash me-3"></i>
                        <span @click="deleteProduct(item.id)">Delete Item</span>
                    </button>
                </div>
                <div class="text-end col-4">
                    <p class="fw-bold fs-5">EGP {{ item.price * item.amount }}.00</p>
                </div>
                <hr class="m-3">
            </div>
        </div>
    </div>
    <div class="vh-100 d-flex justify-content-center align-items-center w-100 flex-column" v-if="userData.cart == ''">
        <img src="../assets/Empty-removebg-preview.png" alt="">
        <router-link to="userhome">
            <button class="btn btn-success">Keep shopping...</button>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {

    data() {
        return {

        }
    },
    methods: {
        deleteProduct(id) {
            this.$store.dispatch('DeleteProduct', id)
        },
        removerAllCart() {
            this.$store.dispatch('DeleteAllCart')

        }
    },
    computed: {
        ...mapState(['userData'])
    },
    created() {
        if (localStorage.getItem('loggedAdminId')) {
            this.$router.push('/dashBoard')
        }
        else if (!localStorage.getItem('loggedUserId')) {
            this.$router.push('/userhome')
        }
    }

}
</script>

<style scoped>
p {
    margin: 0;
}

.cursor {
    cursor: pointer;
}

.fs-7 {
    font-size: 14px;
}

.btn-success {
    background-color: #004b52;
}

.btn-success:hover {
    background-color: #964834;
}
</style>