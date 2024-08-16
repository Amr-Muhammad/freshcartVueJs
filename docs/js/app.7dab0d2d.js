(function(){"use strict";var t={6385:function(t,e,a){var o=a(5130),s=a(6768);const r={class:"container"},l={class:""};function n(t,e,a,o,n,i){const c=(0,s.g2)("navBarComponent"),d=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)(s.FK,null,[t.$route.meta.hideNavbar?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(c,{key:0})),(0,s.Lk)("div",r,[(0,s.Lk)("div",l,[(0,s.bF)(d)])])],64)}var i=a(4232);const c=t=>((0,s.Qi)("data-v-815767ca"),t=t(),(0,s.jt)(),t),d={class:"navbar navbar-expand-lg bg-darkBlue position-fixed start-0 end-0 top-0"},u={class:"container"},m=c((()=>(0,s.Lk)("a",{class:"navbar-brand text-white fs-2 fst-italic"},"FreshCart",-1))),p=c((()=>(0,s.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s.Lk)("span",{class:"navbar-toggler-icon"})],-1))),g={class:"collapse navbar-collapse",id:"navbarSupportedContent"},h={class:"navbar-nav ms-auto mb-2 mb-lg-0 gap-4 d-flex align-items-center text-white"},f={key:0,class:"nav-item position-relative"},b={key:1,class:"nav-item position-relative"},k={class:"list-unstyled d-flex align-items-center bg-dange mb-0"},v={key:0},L=c((()=>(0,s.Lk)("i",{class:"fa-solid fs-4 fa-home cursor"},null,-1))),y={key:1},D={class:"position-relative text-white ms-4 d-flex gap-4"},I=c((()=>(0,s.Lk)("i",{class:"fa-solid fs-4 fa-cart-shopping cursor"},null,-1))),w={key:0,class:"rounded-circle position-absolute top-0 start-0 iconCounter d-flex justify-content-center align-items-center translate-middle"},C={key:2},x=c((()=>(0,s.Lk)("i",{class:"fa-solid fs-4 fa-home cursor"},null,-1))),A={key:3},U={class:"position-relative text-white ms-4 d-flex gap-4"},E=c((()=>(0,s.Lk)("p",{class:"m-0 fw-bold"},"Dashboard",-1))),S={key:0,class:"rounded-circle position-absolute top-0 start-0 iconCounter d-flex justify-content-center align-items-center translate-middle"};function $(t,e,a,o,r,l){const n=(0,s.g2)("RouterLink"),c=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("nav",d,[(0,s.Lk)("div",u,[m,p,(0,s.Lk)("div",g,[(0,s.Lk)("ul",h,[t.userData.role?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("li",f,[(0,s.bF)(n,{"active-class":"active",class:"nav-link text-white","aria-current":"page",to:"/login"},{default:(0,s.k6)((()=>[(0,s.eW)(" Login")])),_:1})])),t.userData.role?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("li",b,[(0,s.bF)(n,{"active-class":"active",class:"nav-link text-white","aria-current":"page",to:"/register"},{default:(0,s.k6)((()=>[(0,s.eW)(" Register")])),_:1})]))])]),(0,s.Lk)("ul",k,["User"==t.userData.role?((0,s.uX)(),(0,s.CE)("li",v,[(0,s.bF)(c,{class:"text-decoration-none text-white",to:"/userhome"},{default:(0,s.k6)((()=>[L])),_:1})])):(0,s.Q3)("",!0),"User"==t.userData.role?((0,s.uX)(),(0,s.CE)("li",y,[(0,s.Lk)("div",D,[(0,s.bF)(c,{class:"text-decoration-none text-white",to:"/cart"},{default:(0,s.k6)((()=>[I])),_:1}),t.noOfCartItems?((0,s.uX)(),(0,s.CE)("span",w,(0,i.v_)(t.noOfCartItems),1)):(0,s.Q3)("",!0),(0,s.Lk)("span",{onClick:e[0]||(e[0]=t=>l.logout()),class:"fw-bold cursor"},"Logout")])])):(0,s.Q3)("",!0),"Admin"==t.userData.role?((0,s.uX)(),(0,s.CE)("li",C,[(0,s.bF)(c,{class:"text-decoration-none text-white",to:"/adminhome"},{default:(0,s.k6)((()=>[x])),_:1})])):(0,s.Q3)("",!0),"Admin"==t.userData.role?((0,s.uX)(),(0,s.CE)("li",A,[(0,s.Lk)("div",U,[(0,s.bF)(c,{class:"text-decoration-none text-white",to:"/dashboard"},{default:(0,s.k6)((()=>[E])),_:1}),t.noOfCartItems?((0,s.uX)(),(0,s.CE)("span",S,(0,i.v_)(t.noOfCartItems),1)):(0,s.Q3)("",!0),(0,s.Lk)("span",{onClick:e[1]||(e[1]=t=>l.logout()),class:"fw-bold cursor"},"Logout")])])):(0,s.Q3)("",!0)])])])}a(4114);var P=a(4373);let _="http://localhost:2000",O="http://localhost:1998/data";var R={data(){return{productDetails:{}}},methods:{async register(t,e){try{let a=await P.A.post(`${_}/${e}`,t);console.log(a)}catch(a){console.log(a)}},getData(t){return P.A.get(`${_}/${t}`).then((t=>t)).catch((t=>console.log(t)))},async deleteData(t,e){await P.A.delete(`${_}/${t}/${e}`)},async getUserProducts(){return(await P.A.get("http://localhost:1998/data")).data},async addToCart(t,e){return await P.A.patch(`${_}/users/${t}`,{cart:e})},async getProductDetails(t){return await P.A.get(`${O}/${t}`)},async getLoggedUser(t){return await P.A.get(`${_}/users/${t}`)},async getLoggedAdmin(t){return await P.A.get(`${_}/admins/${t}`)},async addProductToDataBase(t){try{return await P.A.post(`${O}`,t)}catch(e){console.log(e)}},async adminDeleteItem(t){return await P.A.delete(`${O}/${t}`)},async adminEditProdcut(t,e){return await P.A.put(`${O}/${t}`,e)}}},X=a(782),N={name:"navBar",data(){return{userId:"",loggedUserData:{}}},computed:{...(0,X.aH)(["userData","noOfCartItems"])},methods:{logout(){this.$store.dispatch("logout"),localStorage.removeItem("loggedUserId"),localStorage.removeItem("loggedAdminId"),this.$router.push("/login")},async getLoggedUser(t){return await R.methods.getLoggedUser(t)},async getLoggedAdmin(t){return await R.methods.getLoggedAdmin(t)}},async created(){if(localStorage.getItem("loggedUserId"))this.userId=JSON.parse(localStorage.getItem("loggedUserId")),this.loggedUserData=(await this.getLoggedUser(this.userId)).data,this.$store.dispatch("setUserData",this.loggedUserData),this.$store.dispatch("syncNoOfCartItems",this.loggedUserData.cart.length);else if(localStorage.getItem("loggedAdminId")){let t=JSON.parse(localStorage.getItem("loggedAdminId")),e=(await this.getLoggedAdmin(t)).data;this.$store.dispatch("setUserData",e)}}},Q=a(1241);const T=(0,Q.A)(N,[["render",$],["__scopeId","data-v-815767ca"]]);var F=T,j={name:"App",components:{navBarComponent:F}};const J=(0,Q.A)(j,[["render",n]]);var V=J;a(9953),a(8077);const B={class:"vh-100 d-flex justify-content-center align-items-center"},M=(0,s.Lk)("h1",{class:"text-center fst-italic mb-4"},"Registeration Form",-1),K={class:"name form-group mb-4"},H=(0,s.Lk)("label",{for:"userName"},"Username",-1),G={class:"email form-group mb-4"},W=(0,s.Lk)("label",{for:"exampleInputEmail1"},"Email address",-1),q={class:"password form-group mb-4"},Y=(0,s.Lk)("label",{for:"exampleInputPassword1"},"Password",-1),z={class:"radioBtns d-flex justify-content-center gap-4"},Z={class:"form-check"},tt=(0,s.Lk)("label",{class:"form-check-label",for:"user"},"User",-1),et={class:"form-check"},at=(0,s.Lk)("label",{class:"form-check-label",for:"admin"},"Admin",-1),ot=(0,s.Lk)("div",null,[(0,s.Lk)("button",{type:"submit",class:"btn btn-outline-dark d-block mx-auto mt-4 px-5"},"Register")],-1);function st(t,e,a,r,l,n){return(0,s.uX)(),(0,s.CE)("div",B,[(0,s.Lk)("form",{class:"w-50 bg-light p-5 rounded-5 shadow-lg",onSubmit:e[5]||(e[5]=(0,o.D$)(((...t)=>n.getUserData&&n.getUserData(...t)),["prevent"]))},[M,(0,s.Lk)("div",K,[H,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>l.formData.userName=t),type:"text",class:"form-control",id:"userName",placeholder:"Enter your name"},null,512),[[o.Jo,l.formData.userName]])]),(0,s.Lk)("div",G,[W,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>l.formData.email=t),type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"},null,512),[[o.Jo,l.formData.email]])]),(0,s.Lk)("div",q,[Y,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>l.formData.password=t),type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Password"},null,512),[[o.Jo,l.formData.password]])]),(0,s.Lk)("div",z,[(0,s.Lk)("div",Z,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>l.selectedRole=t),class:"form-check-input",type:"radio",name:"role",id:"user",value:"users"},null,512),[[o.XL,l.selectedRole]]),tt]),(0,s.Lk)("div",et,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>l.selectedRole=t),class:"form-check-input",type:"radio",name:"role",id:"admin",value:"admins"},null,512),[[o.XL,l.selectedRole]]),at])]),ot],32)])}var rt={name:"registerationComponent",data(){return{formData:{userName:"",email:"",password:"",cart:[]},selectedRole:"",dbData:[],exist:!1,filedErrorMsg:!1,radioBtnErrorMsg:!1}},methods:{getUserData(){R.methods.getData(this.selectedRole).then((t=>{this.dbData=t.data,this.exist=this.dbData.find((t=>t.email.toLowerCase()==this.formData.email.toLowerCase())),this.exist?alert("this email has registered before"):(this.formData.role=this.selectedRole.charAt(0).toUpperCase()+this.selectedRole.slice(1,this.selectedRole.length-1),R.methods.register(this.formData,this.selectedRole),this.$router.push("/login"))})).catch((t=>console.log(t)))}},created(){localStorage.getItem("loggedUserId")&&this.$router.push("./userhome")}};const lt=(0,Q.A)(rt,[["render",st]]);var nt=lt,it=a.p+"img/3747371.a22bbf4b.jpg";const ct={class:"vh-100 d-flex justify-content-center align-items-center flex-column"},dt=(0,s.Lk)("img",{class:"w-75",src:it,alt:""},null,-1);function ut(t,e,a,o,r,l){return(0,s.uX)(),(0,s.CE)("div",ct,[dt,(0,s.Lk)("button",{onClick:e[0]||(e[0]=t=>l.goBack()),class:"btn btn-outline-dark"},"Go back to login..")])}var mt={methods:{goBack(){this.$router.push("/login")}}};const pt=(0,Q.A)(mt,[["render",ut]]);var gt=pt,ht=a(1387);const ft=(0,s.Lk)("h1",null,"Hello MotherFucker!",-1),bt=[ft];function kt(t,e,a,o,r,l){return(0,s.uX)(),(0,s.CE)("div",null,bt)}var vt={};const Lt=(0,Q.A)(vt,[["render",kt]]);var yt=Lt;const Dt={class:"vh-100 d-flex justify-content-center align-items-center"},It=(0,s.Lk)("h1",{class:"text-center fst-italic mb-4"},"Login Form",-1),wt={class:"email form-group mb-4"},Ct=(0,s.Lk)("label",{for:"exampleInputEmail1"},"Email address",-1),xt={class:"password form-group mb-4"},At=(0,s.Lk)("label",{for:"exampleInputPassword1"},"Password",-1),Ut={class:"radioBtns d-flex justify-content-center gap-4"},Et={class:"form-check"},St=(0,s.Lk)("label",{class:"form-check-label",for:"user"},"User",-1),$t={class:"form-check"},Pt=(0,s.Lk)("label",{class:"form-check-label",for:"admin"},"Admin",-1),_t=(0,s.Lk)("div",null,[(0,s.Lk)("button",{type:"submit",class:"btn btn-outline-dark d-block mx-auto mt-4 px-5"},"Login")],-1);function Ot(t,e,a,r,l,n){const i=(0,s.g2)("RouterLink");return(0,s.uX)(),(0,s.CE)("div",Dt,[(0,s.Lk)("form",{class:"w-50 bg-light p-5 rounded-5 shadow-lg",onSubmit:e[4]||(e[4]=(0,o.D$)((t=>n.login()),["prevent"]))},[It,(0,s.Lk)("div",wt,[Ct,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>l.formData.email=t),type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"},null,512),[[o.Jo,l.formData.email]])]),(0,s.Lk)("div",xt,[At,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>l.formData.password=t),type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Password"},null,512),[[o.Jo,l.formData.password]])]),(0,s.Lk)("div",Ut,[(0,s.Lk)("div",Et,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>l.selectedRole=t),class:"form-check-input",type:"radio",name:"role",id:"user",value:"users"},null,512),[[o.XL,l.selectedRole]]),St]),(0,s.Lk)("div",$t,[(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>l.selectedRole=t),class:"form-check-input",type:"radio",name:"role",id:"admin",value:"admins"},null,512),[[o.XL,l.selectedRole]]),Pt])]),_t,(0,s.Lk)("a",null,[(0,s.eW)("Not a member? "),(0,s.bF)(i,{to:"/register"},{default:(0,s.k6)((()=>[(0,s.eW)("Sign Up")])),_:1})])],32)])}var Rt={name:"loginComponenet",data(){return{formData:{email:"",password:""},dbData:[],selectedRole:"",loginData:""}},mixins:[R],methods:{async login(){"users"==this.selectedRole?(this.dbData=(await this.getData(this.selectedRole)).data,this.loginData=this.dbData.find((t=>t.email==this.formData.email&&t.password==this.formData.password)),this.loginData?(this.setUserData(this.loginData),this.syncNoOfCartItems(this.loginData.cart.length),localStorage.setItem("loggedUserId",JSON.stringify(this.loginData.id)),this.$router.push("/userhome")):alert("wrong email or password")):"admins"==this.selectedRole&&(this.dbData=(await this.getData(this.selectedRole)).data,this.loginData=this.dbData.find((t=>t.email==this.formData.email&&t.password==this.formData.password)),this.loginData?(this.setUserData(this.loginData),localStorage.setItem("loggedAdminId",JSON.stringify(this.loginData.id)),this.$router.push("/dashBoard")):alert("wrong email or password"))},setUserData(t){this.$store.dispatch("setUserData",t)},syncNoOfCartItems(t){this.$store.dispatch("syncNoOfCartItems",t)}},created(){localStorage.getItem("loggedUserId")?this.$router.push("./userhome"):localStorage.getItem("loggedAdminId")&&this.$router.push("./dashBoard")}};const Xt=(0,Q.A)(Rt,[["render",Ot]]);var Nt=Xt;const Qt=t=>((0,s.Qi)("data-v-97111290"),t=t(),(0,s.jt)(),t),Tt={class:"w-75 mx-auto flex-column text-center my-5"},Ft={class:"py-5"},jt=Qt((()=>(0,s.Lk)("h1",{class:"fst-italic mb-5"},"DashBoard",-1))),Jt={class:"table table-dark table-hover shadow-lg"},Vt={key:0},Bt=Qt((()=>(0,s.Lk)("tr",null,[(0,s.Lk)("th",{scope:"col"},"#"),(0,s.Lk)("th",{scope:"col"},"ID"),(0,s.Lk)("th",{scope:"col"},"Name"),(0,s.Lk)("th",{scope:"col"},"Email"),(0,s.Lk)("th",{scope:"col"},"Role"),(0,s.Lk)("th",{scope:"col"},"Delete")],-1))),Mt=[Bt],Kt={scope:"row"},Ht=["onClick"],Gt=Qt((()=>(0,s.Lk)("i",{class:"fa-solid fa-trash"},null,-1))),Wt=[Gt],qt={scope:"row"},Yt=["onClick"],zt=Qt((()=>(0,s.Lk)("i",{class:"fa-solid fa-trash"},null,-1))),Zt=[zt];function te(t,e,a,o,r,l){return(0,s.uX)(),(0,s.CE)("div",Tt,[(0,s.Lk)("div",Ft,[jt,(0,s.Lk)("table",Jt,[r.usersData.length>0||r.adminsData.length>0?((0,s.uX)(),(0,s.CE)("thead",Vt,Mt)):(0,s.Q3)("",!0),(0,s.Lk)("tbody",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.usersData,((t,e)=>((0,s.uX)(),(0,s.CE)("tr",{key:t},[(0,s.Lk)("th",Kt,(0,i.v_)(e),1),(0,s.Lk)("td",null,(0,i.v_)(t.id),1),(0,s.Lk)("td",null,(0,i.v_)(t.userName),1),(0,s.Lk)("td",null,(0,i.v_)(t.email),1),(0,s.Lk)("td",null,(0,i.v_)(t.role),1),(0,s.Lk)("td",null,[(0,s.Lk)("button",{onClick:e=>l.deleteData(t.role.toLowerCase()+"s",t.id),class:"btn btn-danger"},Wt,8,Ht)])])))),128)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.adminsData,((t,e)=>((0,s.uX)(),(0,s.CE)("tr",{key:t},[(0,s.Lk)("th",qt,(0,i.v_)(e),1),(0,s.Lk)("td",null,(0,i.v_)(t.id),1),(0,s.Lk)("td",null,(0,i.v_)(t.userName),1),(0,s.Lk)("td",null,(0,i.v_)(t.email),1),(0,s.Lk)("td",null,(0,i.v_)(t.role),1),(0,s.Lk)("td",null,[(0,s.Lk)("button",{onClick:e=>l.deleteData(t.role.toLowerCase()+"s",t.id),class:"btn btn-danger"},Zt,8,Yt)])])))),128))])])])])}var ee={data(){return{usersData:[],adminsData:[]}},created(){this.getData(),localStorage.getItem("loggedAdminId")?this.$router.push("/dashBoard"):localStorage.getItem("loggedUserId")?this.$router.push("/userhome"):this.$router.push("/login")},methods:{async getData(){this.usersData=(await R.methods.getData("users")).data,this.adminsData=(await R.methods.getData("admins")).data},async deleteData(t,e){await R.methods.deleteData(t,e),this.getData()}},computed:{...(0,X.aH)(["userData"])}};const ae=(0,Q.A)(ee,[["render",te],["__scopeId","data-v-97111290"]]);var oe=ae;const se={class:"my-5"},re={class:"py-5"},le=(0,s.Lk)("h2",{class:"mb-4"},"Popular Products",-1),ne={class:"row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4"},ie={class:"border border-1 rounded-3 p-3"},ce=["src"],de={class:"text-muted m-0 fs-7"},ue={class:"m-0 fw-bold"},me={class:"d-flex align-items-center"},pe=(0,s.Lk)("i",{class:"fa-solid fa-star text-warning"},null,-1),ge={class:"m-0 my-1 text-muted fs-7"},he={class:"m-0 text-muted fs-7"},fe={class:"m-0 mt-2 fw-bold"},be=["onClick"];function ke(t,e,a,o,r,l){return(0,s.uX)(),(0,s.CE)("div",se,[(0,s.Lk)("div",re,[le,(0,s.Lk)("div",ne,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.products,(t=>((0,s.uX)(),(0,s.CE)("div",{key:t.id,class:""},[(0,s.Lk)("div",ie,[(0,s.Lk)("img",{class:"w-75 d-block rounded-3 m-auto",src:t.imageCover,alt:""},null,8,ce),(0,s.Lk)("p",de,(0,i.v_)(t.subcategory[0].name),1),(0,s.Lk)("p",ue,(0,i.v_)(t.title.length>15?t.title.slice(0,15).split("").join("")+"...":t.title),1),(0,s.Lk)("div",me,[pe,(0,s.Lk)("p",ge,(0,i.v_)(t.ratingsQuantity),1),(0,s.Lk)("p",he,"("+(0,i.v_)(t.ratingsAverage)+")",1)]),(0,s.Lk)("p",fe," EGP "+(0,i.v_)(t.price)+".00",1),(0,s.Lk)("button",{onClick:e=>l.addToCart(t.id),class:"btn btn-success d-block mx-auto w-100 mt-3"},"Add to cart",8,be)])])))),128))])])])}var ve={data(){return{products:[],productDetails:{},counter:0,index:""}},methods:{async addToCart(t){this.productDetails=(await R.methods.getProductDetails(t)).data,this.index=this.userData.cart.findIndex((e=>e.id==t)),this.index>-1?this.userData.cart[this.index].amount++:(this.productDetails.amount=1,this.userData.cart.push(this.productDetails)),await R.methods.addToCart(this.userData.id,this.userData.cart),this.syncNoOfCartItems(this.userData.cart.length)},async getAllProducts(){this.products=await R.methods.getUserProducts()},syncNoOfCartItems(t){this.$store.dispatch("syncNoOfCartItems",t)}},computed:{...(0,X.aH)(["userData"])},created(){localStorage.getItem("loggedUserId")?this.getAllProducts():this.$router.push("/login")}};const Le=(0,Q.A)(ve,[["render",ke]]);var ye=Le;let De=(0,X.y$)({state(){return{userData:{},noOfCartItems:0}},mutations:{SETUSERDATA(t,e){t.userData=e},SYNCNOOFCARTITEMS(t,e){t.noOfCartItems=e},LOGOUT(t){t.userData={}}},actions:{setUserData({commit:t},e){t("SETUSERDATA",e)},syncNoOfCartItems({commit:t},e){t("SYNCNOOFCARTITEMS",e)},logout({commit:t}){t("LOGOUT")},DeleteProduct({commit:t,state:e},a){let o=e.userData.cart.findIndex((t=>t.id==a));e.userData.cart.splice(o,1),R.methods.addToCart(JSON.parse(localStorage.getItem("loggedUserId")),e.userData.cart),t("SYNCNOOFCARTITEMS",e.userData.cart.length)},DeleteAllCart({commit:t,state:e}){e.userData.cart=[],R.methods.addToCart(JSON.parse(localStorage.getItem("loggedUserId")),e.userData.cart),t("SYNCNOOFCARTITEMS",e.userData.cart.length)}}});var Ie=De,we=a.p+"img/Empty-removebg-preview.8bc7c952.png";const Ce=t=>((0,s.Qi)("data-v-403e45e6"),t=t(),(0,s.jt)(),t),xe={key:0,class:"py-5"},Ae={class:"py-5"},Ue={class:"d-flex align-items-center"},Ee=Ce((()=>(0,s.Lk)("i",{class:"fa-solid fa-briefcase fa-2x me-2"},null,-1))),Se=Ce((()=>(0,s.Lk)("h2",null,"My Cart",-1))),$e=Ce((()=>(0,s.Lk)("hr",null,null,-1))),Pe={class:"col-2 text-center"},_e=["src"],Oe={class:"col-6"},Re={class:"text-success fs-7 mt-2"},Xe={class:"mb-3"},Ne={class:"btn btn-danger"},Qe=Ce((()=>(0,s.Lk)("i",{class:"fa-solid fa-trash me-3"},null,-1))),Te=["onClick"],Fe={class:"text-end col-4"},je={class:"fw-bold fs-5"},Je=Ce((()=>(0,s.Lk)("hr",{class:"m-3"},null,-1))),Ve={key:1,class:"vh-100 d-flex justify-content-center align-items-center w-100 flex-column"},Be=Ce((()=>(0,s.Lk)("img",{src:we,alt:""},null,-1))),Me=Ce((()=>(0,s.Lk)("button",{class:"btn btn-success"},"Keep shopping...",-1)));function Ke(t,e,a,o,r,l){const n=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)(s.FK,null,[""!=t.userData.cart?((0,s.uX)(),(0,s.CE)("div",xe,[(0,s.Lk)("div",Ae,[(0,s.Lk)("div",Ue,[Ee,Se,(0,s.Lk)("p",{onClick:e[0]||(e[0]=t=>l.removerAllCart()),class:"m-0 ms-auto text-decoration-underline text-danger cursor"},"Remove All ")]),$e,((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.userData.cart,(t=>((0,s.uX)(),(0,s.CE)("div",{key:t,class:"row"},[(0,s.Lk)("div",Pe,[(0,s.Lk)("img",{class:"w-75",src:t.imageCover,alt:""},null,8,_e)]),(0,s.Lk)("div",Oe,[(0,s.Lk)("p",null,(0,i.v_)(t.title),1),(0,s.Lk)("p",Re,[(0,s.eW)('In stock "Availability" '),(0,s.Lk)("span",null,(0,i.v_)(t.quantity),1)]),(0,s.Lk)("p",Xe,"Quantity "+(0,i.v_)(t.amount),1),(0,s.Lk)("button",Ne,[Qe,(0,s.Lk)("span",{onClick:e=>l.deleteProduct(t.id)},"Delete Item",8,Te)])]),(0,s.Lk)("div",Fe,[(0,s.Lk)("p",je,"EGP "+(0,i.v_)(t.price*t.amount)+".00",1)]),Je])))),128))])])):(0,s.Q3)("",!0),""==t.userData.cart?((0,s.uX)(),(0,s.CE)("div",Ve,[Be,(0,s.bF)(n,{to:"userhome"},{default:(0,s.k6)((()=>[Me])),_:1})])):(0,s.Q3)("",!0)],64)}var He={data(){return{}},methods:{deleteProduct(t){this.$store.dispatch("DeleteProduct",t)},removerAllCart(){this.$store.dispatch("DeleteAllCart")}},computed:{...(0,X.aH)(["userData"])},created(){localStorage.getItem("loggedAdminId")?this.$router.push("/dashBoard"):localStorage.getItem("loggedUserId")||this.$router.push("/userhome")}};const Ge=(0,Q.A)(He,[["render",Ke],["__scopeId","data-v-403e45e6"]]);var We=Ge;const qe={class:"my-5"},Ye={class:"py-5"},ze={class:"d-flex justify-content-between align-items-center"},Ze=(0,s.Lk)("h2",{class:"mb-4"},"Popular Products",-1),ta=(0,s.Lk)("button",{class:"btn btn-success"},"+ Add Product",-1),ea={class:"row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4"},aa={class:"border border-1 rounded-3 p-3"},oa=["src"],sa={class:"text-muted m-0 fs-7"},ra={class:"m-0 fw-bold"},la={class:"d-flex align-items-center"},na=(0,s.Lk)("i",{class:"fa-solid fa-star text-warning"},null,-1),ia={class:"m-0 my-1 text-muted fs-7"},ca={class:"m-0 text-muted fs-7"},da={class:"m-0 mt-2 fw-bold"},ua={class:"mt-3 d-flex gap-3"},ma=(0,s.Lk)("button",{class:"flex-grow-1 btn btn-success px-4"},"Edit",-1),pa=["onClick"];function ga(t,e,a,o,r,l){const n=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",qe,[(0,s.Lk)("div",Ye,[(0,s.Lk)("div",ze,[Ze,(0,s.bF)(n,{to:"addproduct"},{default:(0,s.k6)((()=>[ta])),_:1})]),(0,s.Lk)("div",ea,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.allProducts,(t=>((0,s.uX)(),(0,s.CE)("div",{key:t.id,class:""},[(0,s.Lk)("div",aa,[(0,s.Lk)("img",{class:"w-75 d-block rounded-3 m-auto",src:t.imageCover,alt:""},null,8,oa),(0,s.Lk)("p",sa,(0,i.v_)(t.subcategory[0].name),1),(0,s.Lk)("p",ra,(0,i.v_)(t.title.length>15?t.title.slice(0,15).split("").join("")+"...":t.title),1),(0,s.Lk)("div",la,[na,(0,s.Lk)("p",ia,(0,i.v_)(t.ratingsQuantity),1),(0,s.Lk)("p",ca,"("+(0,i.v_)(t.ratingsAverage)+")",1)]),(0,s.Lk)("p",da," EGP "+(0,i.v_)(t.price)+".00",1),(0,s.Lk)("div",ua,[(0,s.bF)(n,{to:`/editproduct/${t.id}`},{default:(0,s.k6)((()=>[ma])),_:2},1032,["to"]),(0,s.Lk)("button",{onClick:e=>l.adminDeleteItem(t.id),class:"flex-grow-1 btn btn-danger"},"Delete",8,pa)])])])))),128))])])])}var ha={data(){return{allProducts:[]}},methods:{async getAllProducts(){this.allProducts=await R.methods.getUserProducts()},async adminDeleteItem(t){await R.methods.adminDeleteItem(t),this.getAllProducts()}},created(){this.getAllProducts()}};const fa=(0,Q.A)(ha,[["render",ga]]);var ba=fa;const ka=t=>((0,s.Qi)("data-v-3a0c643e"),t=t(),(0,s.jt)(),t),va={class:"container"},La={class:"d-flex flex-column vh-100 justify-content-center align-items-center"},ya=ka((()=>(0,s.Lk)("h1",{class:"mb-5 fst-italic"},"Add Product",-1))),Da={class:"mb-3"},Ia=ka((()=>(0,s.Lk)("label",{for:"title",class:"form-label"},"Title",-1))),wa={class:"mb-3"},Ca=ka((()=>(0,s.Lk)("label",{for:"price",class:"form-label"},"Price",-1))),xa={class:"mb-3"},Aa=ka((()=>(0,s.Lk)("label",{for:"subcategory",class:"form-label"},"Subcategory",-1))),Ua={class:"mb-3"},Ea=ka((()=>(0,s.Lk)("label",{for:"price",class:"form-label"},"Image Source",-1))),Sa={class:"mb-3"},$a=ka((()=>(0,s.Lk)("label",{for:"ratingQ",class:"form-label"},"Rating Quantity",-1))),Pa={class:"mb-3"},_a=ka((()=>(0,s.Lk)("label",{for:"ratingAverage",class:"form-label"},"Rating Average",-1))),Oa={class:"mb-3"},Ra=ka((()=>(0,s.Lk)("label",{for:"description",class:"form-label"},"Description",-1))),Xa=ka((()=>(0,s.Lk)("button",{class:"btn btn-success d-block mx-auto px-5"},"Submit",-1)));function Na(t,e,a,r,l,n){return(0,s.uX)(),(0,s.CE)("div",va,[(0,s.Lk)("div",La,[ya,(0,s.Lk)("form",{class:"w-50",onSubmit:e[7]||(e[7]=(0,o.D$)((t=>n.addProductToDataBase(l.productInfo)),["prevent"]))},[(0,s.Lk)("div",Da,[Ia,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>l.productInfo.title=t),placeholder:"Product title",type:"text",class:"form-control",id:"title"},null,512),[[o.Jo,l.productInfo.title]])]),(0,s.Lk)("div",wa,[Ca,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>l.productInfo.price=t),placeholder:"Product title",type:"number",class:"form-control",id:"price"},null,512),[[o.Jo,l.productInfo.price]])]),(0,s.Lk)("div",xa,[Aa,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>l.productInfo.subcategory[0].name=t),placeholder:"Subcategory",type:"text",class:"form-control",id:"subcategory"},null,512),[[o.Jo,l.productInfo.subcategory[0].name]])]),(0,s.Lk)("div",Ua,[Ea,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>l.productInfo.imageCover=t),placeholder:"Enter image source",type:"text",class:"form-control",id:"price"},null,512),[[o.Jo,l.productInfo.imageCover]])]),(0,s.Lk)("div",Sa,[$a,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>l.productInfo.ratingsQuantity=t),placeholder:"Rating quantity",type:"number",class:"form-control",id:"ratingQ"},null,512),[[o.Jo,l.productInfo.ratingsQuantity]])]),(0,s.Lk)("div",Pa,[_a,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[5]||(e[5]=t=>l.productInfo.ratingsAverage=t),placeholder:"Rating average",type:"number",class:"form-control",id:"ratingAverage"},null,512),[[o.Jo,l.productInfo.ratingsAverage]])]),(0,s.Lk)("div",Oa,[Ra,(0,s.bo)((0,s.Lk)("textarea",{"onUpdate:modelValue":e[6]||(e[6]=t=>l.productInfo.description=t),rows:"5",class:"form-control",id:"description",placeholder:"Product description"},null,512),[[o.Jo,l.productInfo.description]])]),Xa],32)])])}var Qa={data(){return{productInfo:{sold:"",images:[],subcategory:[{name:""}],ratingsQuantity:"",title:"",description:"",quantity:"",price:"",imageCover:"",category:{},brand:{},ratingsAverage:"",createdAt:"",updatedAt:"2024"}}},methods:{async addProductToDataBase(t){let e=await R.methods.addProductToDataBase(t);console.log(e),this.$router.push("/adminhome")}},created(){localStorage.getItem("loggedAdminId")?this.$router.push("/addproduct"):localStorage.getItem("loggedUserId")?this.$router.push("/userhome"):this.$router.push("/login")}};const Ta=(0,Q.A)(Qa,[["render",Na],["__scopeId","data-v-3a0c643e"]]);var Fa=Ta;const ja=t=>((0,s.Qi)("data-v-08fadbca"),t=t(),(0,s.jt)(),t),Ja={class:"container"},Va={class:"d-flex flex-column vh-100 justify-content-center align-items-center"},Ba=ja((()=>(0,s.Lk)("h1",{class:"mb-5 fst-italic"},"Add Product",-1))),Ma={class:"mb-3"},Ka=ja((()=>(0,s.Lk)("label",{for:"title",class:"form-label"},"Title",-1))),Ha={class:"mb-3"},Ga=ja((()=>(0,s.Lk)("label",{for:"price",class:"form-label"},"Price",-1))),Wa={class:"mb-3"},qa=ja((()=>(0,s.Lk)("label",{for:"subcategory",class:"form-label"},"Subcategory",-1))),Ya={class:"mb-3"},za=ja((()=>(0,s.Lk)("label",{for:"price",class:"form-label"},"Image Source",-1))),Za={class:"mb-3"},to=ja((()=>(0,s.Lk)("label",{for:"ratingQ",class:"form-label"},"Rating Quantity",-1))),eo={class:"mb-3"},ao=ja((()=>(0,s.Lk)("label",{for:"ratingAverage",class:"form-label"},"Rating Average",-1))),oo={class:"mb-3"},so=ja((()=>(0,s.Lk)("label",{for:"description",class:"form-label"},"Description",-1))),ro=ja((()=>(0,s.Lk)("button",{class:"btn btn-success d-block mx-auto px-5"},"Submit",-1)));function lo(t,e,a,r,l,n){return(0,s.uX)(),(0,s.CE)("div",Ja,[(0,s.Lk)("div",Va,[Ba,(0,s.Lk)("form",{class:"w-50",onSubmit:e[7]||(e[7]=(0,o.D$)((t=>n.adminEditProdcut(l.productInfo.id)),["prevent"]))},[(0,s.Lk)("div",Ma,[Ka,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>l.productInfo.title=t),placeholder:"Product title",type:"text",class:"form-control",id:"title"},null,512),[[o.Jo,l.productInfo.title]])]),(0,s.Lk)("div",Ha,[Ga,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>l.productInfo.price=t),placeholder:"Product title",type:"number",class:"form-control",id:"price"},null,512),[[o.Jo,l.productInfo.price]])]),(0,s.Lk)("div",Wa,[qa,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>l.productInfo.subcategory[0].name=t),placeholder:"Subcategory",type:"text",class:"form-control",id:"subcategory"},null,512),[[o.Jo,l.productInfo.subcategory[0].name]])]),(0,s.Lk)("div",Ya,[za,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>l.productInfo.imageCover=t),placeholder:"Enter image source",type:"text",class:"form-control",id:"price"},null,512),[[o.Jo,l.productInfo.imageCover]])]),(0,s.Lk)("div",Za,[to,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>l.productInfo.ratingsQuantity=t),placeholder:"Rating quantity",type:"number",class:"form-control",id:"ratingQ"},null,512),[[o.Jo,l.productInfo.ratingsQuantity]])]),(0,s.Lk)("div",eo,[ao,(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[5]||(e[5]=t=>l.productInfo.ratingsAverage=t),placeholder:"Rating average",type:"number",class:"form-control",id:"ratingAverage"},null,512),[[o.Jo,l.productInfo.ratingsAverage]])]),(0,s.Lk)("div",oo,[so,(0,s.bo)((0,s.Lk)("textarea",{"onUpdate:modelValue":e[6]||(e[6]=t=>l.productInfo.description=t),rows:"5",class:"form-control",id:"description",placeholder:"Product description"},null,512),[[o.Jo,l.productInfo.description]])]),ro],32)])])}var no={data(){return{productInfo:{sold:"",images:[],subcategory:[{name:""}],ratingsQuantity:"",title:"",description:"",quantity:"",price:"",imageCover:"",category:{},brand:{},ratingsAverage:"",createdAt:"",updatedAt:"2024"},id:""}},methods:{async adminEditProdcut(t){await R.methods.adminEditProdcut(t,this.productInfo),this.$router.push("/adminhome")}},async created(){this.id=this.$route.params.id,localStorage.getItem("loggedAdminId")?(this.$router.push(`/editproduct/${this.id}`),this.productInfo=(await R.methods.getProductDetails(this.id)).data):localStorage.getItem("loggedUserId")?this.$router.push("/userhome"):this.$router.push("/login")}};const io=(0,Q.A)(no,[["render",lo],["__scopeId","data-v-08fadbca"]]);var co=io;const uo=[{path:"/",component:Nt,alias:"/login"},{path:"/register",component:nt},{path:"/welcome",component:yt},{path:"/dashboard",component:oe},{path:"/userhome",component:ye},{path:"/adminhome",component:ba},{path:"/addproduct",component:Fa},{path:"/editproduct/:id",component:co},{path:"/cart",component:We},{path:"/:NotFound(.*)*",component:gt,meta:{hideNavbar:!0}}],mo=(0,ht.aE)({history:(0,ht.LA)(),routes:uo});(0,o.Ef)(V).use(Ie).use(mo).mount("#app")}},e={};function a(o){var s=e[o];if(void 0!==s)return s.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,o,s,r){if(!o){var l=1/0;for(d=0;d<t.length;d++){o=t[d][0],s=t[d][1],r=t[d][2];for(var n=!0,i=0;i<o.length;i++)(!1&r||l>=r)&&Object.keys(a.O).every((function(t){return a.O[t](o[i])}))?o.splice(i--,1):(n=!1,r<l&&(l=r));if(n){t.splice(d--,1);var c=s();void 0!==c&&(e=c)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[o,s,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,r,l=o[0],n=o[1],i=o[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(s in n)a.o(n,s)&&(a.m[s]=n[s]);if(i)var d=i(a)}for(e&&e(o);c<l.length;c++)r=l[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(d)},o=self["webpackChunknewapp"]=self["webpackChunknewapp"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(6385)}));o=a.O(o)})();
//# sourceMappingURL=app.7dab0d2d.js.map