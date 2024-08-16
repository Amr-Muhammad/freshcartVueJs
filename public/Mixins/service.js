import axios from "axios"

let usersBaseUrl = 'http://localhost:2000'
let prodBaseUrl = 'http://localhost:1998/data'

export default {
    data() {
        return {
            productDetails: {}
        }
    },
    methods: {
        async register(formData, role) {
            try {
                let res = await axios.post(`${usersBaseUrl}/${role}`, formData)
                console.log(res);
            }
            catch (err) {
                console.log(err)
            }
        },

        getData(role) {
            return axios.get(`${usersBaseUrl}/${role}`)
                .then(res => res)
                .catch(err => console.log(err))
        },

        async deleteData(role, id) {
            await axios.delete(`${usersBaseUrl}/${role}/${id}`)
        },

        async getUserProducts() {
            return (await axios.get('http://localhost:1998/data')).data
        },

        async addToCart(userId, cart) {
            return await axios.patch(`${usersBaseUrl}/users/${userId}`, { cart })
        },

        async getProductDetails(productId) {
            return await axios.get(`${prodBaseUrl}/${productId}`)
        },

        async getLoggedUser(id) {
            return await axios.get(`${usersBaseUrl}/users/${id}`)
        },

        async getLoggedAdmin(id) {
            return await axios.get(`${usersBaseUrl}/admins/${id}`)
        },

        async addProductToDataBase(productInfo) {
            try {
                return await axios.post(`${prodBaseUrl}`, productInfo)
            }
            catch (err) {
                console.log(err);

            }
        },

        async adminDeleteItem(productId) {
            return await axios.delete(`${prodBaseUrl}/${productId}`)
        },

        async adminEditProdcut(productId, productInfo) {
            return await axios.put(`${prodBaseUrl}/${productId}`, productInfo)
        }

    }
}