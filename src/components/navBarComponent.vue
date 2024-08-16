<template>
    <nav class="navbar navbar-expand-lg bg-darkBlue position-fixed start-0 end-0 top-0">
        <div class="container">
            <a class="navbar-brand text-white fs-2 fst-italic">FreshCart</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 d-flex align-items-center text-white">
                    <li v-if="!userData.role" class="nav-item position-relative">
                        <RouterLink active-class="active" class="nav-link text-white" aria-current="page" to="/login">
                            Login</RouterLink>
                    </li>
                    <li v-if="!userData.role" class="nav-item position-relative">
                        <RouterLink active-class="active" class="nav-link text-white" aria-current="page" to="/register">
                            Register</RouterLink>
                    </li>
                </ul>
            </div>

            <ul class="list-unstyled d-flex align-items-center bg-dange mb-0">
                <li v-if="userData.role == 'User'">
                    <router-link class="text-decoration-none text-white" to="/userhome">
                        <i class="fa-solid fs-4 fa-home cursor"></i>
                    </router-link>
                </li>
                <li v-if="userData.role == 'User'">
                    <div class="position-relative text-white ms-4 d-flex gap-4">
                        <router-link class="text-decoration-none text-white" to="/cart">
                            <i class="fa-solid fs-4 fa-cart-shopping cursor"></i>
                        </router-link>
                        <span v-if="noOfCartItems"
                            class="rounded-circle position-absolute top-0 start-0 iconCounter d-flex justify-content-center align-items-center translate-middle">{{
                                noOfCartItems }}</span>
                        <span @click="logout()" class="fw-bold cursor">Logout</span>
                    </div>
                </li>
                <li v-if="userData.role == 'Admin'">
                    <router-link class="text-decoration-none text-white" to="/adminhome">
                        <i class="fa-solid fs-4 fa-home cursor"></i>
                    </router-link>
                </li>
                <li v-if="userData.role == 'Admin'">
                    <div class="position-relative text-white ms-4 d-flex gap-4">
                        <router-link class="text-decoration-none text-white" to="/dashboard">
                            <!-- <i class="fa-solid fs-4 fa-cart-shopping cursor"></i> -->
                            <p class="m-0 fw-bold">Dashboard</p>
                        </router-link>
                        <span @click="logout()" class="fw-bold cursor">Logout</span>
                    </div>
                </li>
            </ul>





        </div>
    </nav>


</template>

<script>
import service from '../../public/Mixins/service';
import { mapState } from 'vuex';



export default {
    name: "navBar",
    data() {
        return {
            userId: '',
            loggedUserData: {}
        }
    },
    computed: {
        ...mapState(['userData', 'noOfCartItems'])
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
            localStorage.removeItem('loggedUserId')
            localStorage.removeItem('loggedAdminId')
            this.$router.push('/login')
        },
        async getLoggedUser(id) {
            return await service.methods.getLoggedUser(id)
        },
        async getLoggedAdmin(id) {
            return await service.methods.getLoggedAdmin(id)
        }

    },
    async created() {
        if (localStorage.getItem('loggedUserId')) {
            this.userId = JSON.parse(localStorage.getItem('loggedUserId'))
            this.loggedUserData = (await this.getLoggedUser(this.userId)).data
            this.$store.dispatch('setUserData', this.loggedUserData)
            this.$store.dispatch('syncNoOfCartItems', this.loggedUserData.cart.length)
        }
        else if (localStorage.getItem('loggedAdminId')) {
            let adminId = JSON.parse(localStorage.getItem('loggedAdminId'))
            let loggedAdminData = (await this.getLoggedAdmin(adminId)).data
            this.$store.dispatch('setUserData', loggedAdminData)
            // console.log(this.userData);


        }
    },


};
</script>

<style scoped>
.bg-darkBlue {
    background-color: #003135;
}

.active {
    color: #964834 !important;
    font-weight: bold;
    text-decoration: underline #964834 2px;
    text-underline-offset: 12px;
}

.navbar-nav li {
    overflow: hidden;
}

.navbar-nav li:hover::before {
    left: 0% !important;
}

.navbar-nav li::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: -100%;
    background-color: #964834;
    transition: all 0.3s;
}

.iconCounter {
    width: 20px;
    height: 20px;
    cursor: pointer;
    background-color: #964834;
}

.cursor {
    cursor: pointer;
}
</style>