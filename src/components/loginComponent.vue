<template>

    <div class="vh-100 d-flex justify-content-center align-items-center">

        <form class="w-50 bg-light p-5 rounded-5 shadow-lg" @submit.prevent="login()">
            <h1 class="text-center fst-italic mb-4">Login Form</h1>


            <div class="email form-group mb-4">
                <label for="exampleInputEmail1">Email address</label>
                <input v-model="formData.email" type="email" class="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <!-- <div v-if="filedErrorMsg" class="alert alert-danger">
                <p class="m-0">Enter a valid email</p>
            </div> -->

            <div class="password form-group mb-4">
                <label for="exampleInputPassword1">Password</label>
                <input v-model="formData.password" type="password" class="form-control" id="exampleInputPassword1"
                    placeholder="Password">
            </div>
            <!-- <div v-if="filedErrorMsg" class="alert alert-danger">
                <p class="m-0">Enter a valid password</p>
            </div> -->

            <div class="radioBtns d-flex justify-content-center gap-4">
                <div class="form-check">
                    <input v-model="selectedRole" class="form-check-input" type="radio" name="role" id="user"
                        value="users">
                    <label class="form-check-label" for="user">User</label>
                </div>

                <div class="form-check">
                    <input v-model="selectedRole" class="form-check-input" type="radio" name="role" id="admin"
                        value="admins">
                    <label class="form-check-label" for="admin">Admin</label>
                </div>
            </div>

            <!-- <div v-if="radioBtnErrorMsg" class="alert alert-danger mt-4">
                <p class="m-0">Choose your role</p>
            </div> -->

            <div>
                <button type="submit" class="btn btn-outline-dark d-block mx-auto mt-4 px-5">Login</button>
            </div>
            <a>Not a member?
                <RouterLink to="/register">Sign Up</RouterLink>
            </a>
        </form>

    </div>

</template>

<script>
import service from '../../public/Mixins/service';

export default {
    name: 'loginComponenet',
    data() {
        return {
            formData: {
                email: '',
                password: ''
            },
            dbData: [],
            selectedRole: '',
            loginData: '',
        }
    },
    mixins: [service],
    methods: {
        async login() {
            if (this.selectedRole == 'users') {
                this.dbData = (await this.getData(this.selectedRole)).data
                this.loginData = this.dbData.find(el => el.email == this.formData.email && el.password == this.formData.password)
                if (this.loginData) {
                    this.setUserData(this.loginData)
                    this.syncNoOfCartItems(this.loginData.cart.length)
                    localStorage.setItem('loggedUserId', JSON.stringify(this.loginData.id))
                    this.$router.push('/userhome')

                    // Didnt work, it need singleton desing pattern (reactive, or vueX)
                    // service.data().userId = this.loginData.id
                    // console.log(service.data());
                } else {
                    alert('wrong email or password')
                }
            }
            else if (this.selectedRole == 'admins') {
                this.dbData = (await this.getData(this.selectedRole)).data
                this.loginData = this.dbData.find(el => el.email == this.formData.email && el.password == this.formData.password)
                if (this.loginData) {
                    this.setUserData(this.loginData)
                    localStorage.setItem('loggedAdminId', JSON.stringify(this.loginData.id))
                    this.$router.push('/dashBoard')
                }
                else {
                    alert('wrong email or password')

                }
            }
        },
        setUserData(userData) {
            this.$store.dispatch('setUserData', userData)
        },
        syncNoOfCartItems(count) {
            this.$store.dispatch('syncNoOfCartItems', count)
        }
    },
    created() {
        if (localStorage.getItem('loggedUserId')) {
            this.$router.push('./userhome')
        }
        else if (localStorage.getItem('loggedAdminId')) {
            this.$router.push('./dashBoard')
        }
    }
}
</script>

<style scoped></style>