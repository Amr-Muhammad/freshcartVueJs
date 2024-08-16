<template>
    <div class="my-5">
        <div class="py-5">
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="mb-4">Popular Products</h2>
                <router-link to="addproduct">
                    <button class="btn btn-success">+ Add Product</button>
                </router-link>
            </div>
            <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4">
                <div v-for="product in allProducts" :key="product.id" class="">
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
                        <div class="mt-3 d-flex gap-3">
                            <router-link :to="`/editproduct/${product.id}`">
                                <button class="flex-grow-1 btn btn-success px-4">Edit</button>
                            </router-link>
                            <button @click="adminDeleteItem(product.id)"
                                class="flex-grow-1 btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import service from '../../public/Mixins/service';

export default {

    data() {
        return {
            allProducts: []
        }
    },

    methods: {
        async getAllProducts() {
            this.allProducts = await service.methods.getUserProducts()
        },
        async adminDeleteItem(productId) {
            await service.methods.adminDeleteItem(productId)
            this.getAllProducts()
        }
    },
    created() {
        this.getAllProducts()
    }
}
</script>

<style scoped></style>