import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import RegisterationComponent from './components/registerationComponent.vue'
import ErrorComponent from './components/ErrorComponent.vue'
import { createRouter, createWebHistory } from 'vue-router'
import WelcomeComponent from './components/welcomeComponent.vue'
import LoginComponent from './components/loginComponent.vue'
import DashBoardComponent from './components/dashBoardComponent.vue'
import UserProductsComponenet from './components/userProductsComponenet.vue'
import store from './store'
import CartComponent from './components/cartComponent.vue'
import AdminProductsComponenet from './components/adminProductsComponenet.vue'
import AddProductComponent from './components/addProductComponent.vue'
import EditProductComponent from './components/editProductComponent.vue'


const routes = [
    { path: "/", component: LoginComponent, alias: "/login" },
    { path: "/register", component: RegisterationComponent },
    { path: "/welcome", component: WelcomeComponent },
    { path: "/dashboard", component: DashBoardComponent },
    { path: "/userhome", component: UserProductsComponenet },
    { path: "/adminhome", component: AdminProductsComponenet },
    { path: "/addproduct", component: AddProductComponent },
    { path: "/editproduct/:id", component: EditProductComponent },
    { path: "/cart", component: CartComponent },
    {
        path: '/:NotFound(.*)*', component: ErrorComponent, meta: {
            hideNavbar: true
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(store).use(router).mount('#app')
