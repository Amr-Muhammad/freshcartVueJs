<template>
    <div class="w-75 mx-auto flex-column text-center my-5">
        <div class="py-5">
            <h1 class="fst-italic mb-5">DashBoard</h1>

            <table class="table table-dark table-hover shadow-lg">

                <thead v-if="usersData.length > 0 || adminsData.length > 0">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(item, index) in usersData" :key="item">
                        <th scope="row">{{ index }}</th>
                        <td>{{ item.id }}</td>
                        <td>{{ item.userName }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.role }}</td>
                        <td>
                            <button @click="deleteData(item.role.toLowerCase() + 's', item.id)" class="btn btn-danger">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr v-for="(item, index) in adminsData" :key="item">
                        <th scope="row">{{ index }}</th>
                        <td>{{ item.id }}</td>
                        <td>{{ item.userName }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.role }}</td>
                        <td>
                            <button @click="deleteData(item.role.toLowerCase() + 's', item.id)" class="btn btn-danger">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>

            </table>

            <h2>{{ userData }}</h2>

        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';
import service from '../../public/Mixins/service';

export default {
    data() {
        return {
            usersData: [],
            adminsData: []
        }
    },
    created() {
        this.getData()
        if (localStorage.getItem('loggedAdminId')) {
            this.$router.push('/dashBoard')
        }
        else if (localStorage.getItem('loggedUserId')) {
            this.$router.push('/userhome')
        }
        else{
            this.$router.push('/login')
        }
    },
    methods: {
        async getData() {
            this.usersData = (await service.methods.getData('users')).data
            this.adminsData = (await service.methods.getData('admins')).data
        },
        async deleteData(role, id) {
            await service.methods.deleteData(role, id)
            this.getData()
        }
    },
    computed: {
        ...mapState(['userData'])
    }
}
</script>

<style scoped>
.fa-trash:hover {
    cursor: pointer;
    transform: scale(1.2);
}
</style>