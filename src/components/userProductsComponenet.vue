<template>
    <div class="my-5">
        <div class="py-5">
            <h2 class="mb-4">Popular Products</h2>
            <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4">
                <div v-for="product in products" :key="product.id" class="">
                    <div class="border border-1 rounded-3 p-3">
                        <img class="w-75 d-block rounded-3 m-auto" :src="product.imageCover" alt="">
                        <p class="text-muted m-0 fs-7 ">{{ product.subcategory[0].name }}</p>
                        <p class="m-0 fw-bold">{{ product.title.length > 15 ? product.title.slice(0,
                            15).split('').join('')
                            +
                            '...' :
                            product.title }}</p>
                        <div class="d-flex align-items-center">
                            <i class="fa-solid fa-star text-warning"></i>
                            <p class="m-0 my-1 text-muted fs-7">{{ product.ratingsQuantity }}</p>
                            <p class="m-0 text-muted fs-7">({{ product.ratingsAverage }})</p>
                        </div>
                        <p class="m-0 mt-2 fw-bold"> EGP {{ product.price }}.00</p>
                        <button @click="addToCart(product.id)" class="btn btn-success d-block mx-auto w-100 mt-3">Add
                            to
                            cart</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import service from '../../public/Mixins/service';
export default {
    data() {
        return {
            products: [],
            productDetails: {},
            counter: 0,
            index: ''
        }
    }
    ,
    methods: {
        async addToCart(productId) {
            this.productDetails = (await service.methods.getProductDetails(productId)).data
            this.index = this.userData.cart.findIndex(obj => obj.id == productId)
            if (this.index > -1) {
                this.userData.cart[this.index].amount++
            }
            else {
                this.productDetails.amount = 1
                this.userData.cart.push(this.productDetails)
            }

            await service.methods.addToCart(this.userData.id, this.userData.cart)
            this.syncNoOfCartItems(this.userData.cart.length)
        },

        async getAllProducts() {
            this.products = await service.methods.getUserProducts()
        },

        syncNoOfCartItems(cartLength) {
            this.$store.dispatch('syncNoOfCartItems', cartLength)
        },

    }
    ,
    computed: {
        ...mapState(['userData'])
    }
    ,
    created() {
        if (localStorage.getItem('loggedUserId')) {
            this.getAllProducts()
        }
        else {
            this.$router.push('/login')
        }
    }
}
</script>

<style>
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