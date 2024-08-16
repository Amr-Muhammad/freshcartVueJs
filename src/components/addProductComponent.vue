<template>
    <div class="container">
        <div class="d-flex flex-column vh-100 justify-content-center align-items-center">
            <h1 class="mb-5 fst-italic">Add Product</h1>
            <form class="w-50" @submit.prevent="addProductToDataBase(productInfo)">
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input v-model="productInfo.title" placeholder="Product title" type="text" class="form-control"
                        id="title">
                </div>
                <div class="mb-3">
                    <label for="price" class="form-label">Price</label>
                    <input v-model="productInfo.price" placeholder="Product title" type="number" class="form-control"
                        id="price">
                </div>
                <div class="mb-3">
                    <label for="subcategory" class="form-label">Subcategory</label>
                    <input v-model="productInfo.subcategory[0].name" placeholder="Subcategory" type="text" class="form-control"
                        id="subcategory">
                </div>
                <div class="mb-3">
                    <label for="price" class="form-label">Image Source</label>
                    <input v-model="productInfo.imageCover" placeholder="Enter image source" type="text"
                        class="form-control" id="price">
                </div>
                <div class="mb-3">
                    <label for="ratingQ" class="form-label">Rating Quantity</label>
                    <input v-model="productInfo.ratingsQuantity" placeholder="Rating quantity" type="number"
                        class="form-control" id="ratingQ">
                </div>
                <div class="mb-3">
                    <label for="ratingAverage" class="form-label">Rating Average</label>
                    <input v-model="productInfo.ratingsAverage" placeholder="Rating average" type="number"
                        class="form-control" id="ratingAverage">
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea v-model="productInfo.description" rows="5" class="form-control" id="description"
                        placeholder="Product description"></textarea>
                </div>
                <button class="btn btn-success d-block mx-auto px-5">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import service from '../../public/Mixins/service';

export default {
    data() {
        return {
            productInfo: {
                sold: '',
                images: [],
                subcategory: [{
                    name: "",
                }],
                ratingsQuantity: '',
                title: '',
                description: '',
                quantity: '',
                price: '',
                imageCover: '',
                category: {},
                brand: {},
                ratingsAverage: '',
                createdAt: "",
                updatedAt: "2024",
            }
        }
    },
    methods: {
        async addProductToDataBase(productInfo) {
            let res = await service.methods.addProductToDataBase(productInfo)
            console.log(res);
        }
    }
    ,
    created() {
        if (localStorage.getItem('loggedAdminId')) {
            this.$router.push('/addproduct')
        }
        else if (localStorage.getItem('loggedUserId')) {
            this.$router.push('/userhome')
        }
        else {
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>

.container{
    padding: 150px 0px 100px;
}

</style>