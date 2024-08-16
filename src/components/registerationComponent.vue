<template>

    <div class="vh-100 d-flex justify-content-center align-items-center">

        <form class="w-50 bg-light p-5 rounded-5 shadow-lg" @submit.prevent="getUserData">
            <h1 class="text-center fst-italic mb-4">Registeration Form</h1>

            <div class="name form-group mb-4">
                <label for="userName">Username</label>
                <input v-model="formData.userName" type="text" class="form-control" id="userName"
                    placeholder="Enter your name">
            </div>
            <!-- <div v-if="!formData.userName" class="alert alert-danger">
                <p class="m-0">Enter a valid username</p>
            </div> -->


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
                <button type="submit" class="btn btn-outline-dark d-block mx-auto mt-4 px-5">Register</button>
            </div>
        </form>

    </div>

</template>

<script>

import service from '../../public/Mixins/service.js'

export default {
    name: 'registerationComponent',
    // mixins: [service], //NO Need

    data() {
        return {
            formData: {
                userName: '',
                email: '',
                password: '',
                cart: []
                // role: this.selectedRole NOT WORKING!!!
            },
            selectedRole: '',
            dbData: [],
            exist: false,
            filedErrorMsg: false,
            radioBtnErrorMsg: false,

        }
    },
    methods: {
        getUserData() {
            // if (!this.filedErrorMsg && this.selectedRole) {
            // this.formData.userName && this.formData.email && this.formData.password && this.selectedRole
            service.methods.getData(this.selectedRole)
                .then(res => {
                    this.dbData = res.data

                    this.exist = this.dbData.find(obj => obj.email.toLowerCase() == this.formData.email.toLowerCase())

                    if (this.exist) {
                        alert('this email has registered before')
                    }
                    else {
                        this.formData.role = this.selectedRole.charAt(0).toUpperCase() + this.selectedRole.slice(1, this.selectedRole.length - 1)
                        service.methods.register(this.formData, this.selectedRole)
                        this.$router.push('/login')
                    }
                })
                .catch(err => console.log(err))
            // }
        },
    },
    created() {
        if (localStorage.getItem('loggedUserId') ) {
            this.$router.push('./userhome')
        }
    }



}
</script>

<style scoped></style>