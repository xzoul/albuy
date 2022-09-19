<template>
    <!--ACCOUNT-->
    <button v-if="!loggedIn" @click="signInWithGoogle()">Sign in with Google</button><br>
    <button v-if="!loggedIn" @click="signInWithFacebook()">Sign in with Facebook</button><br>
    <button v-if="loggedIn" @click="logOut()">Log out</button><br>

    <!--PRODUCTS-->
    <h3>Add Product</h3>
    <span>Product Name: </span>
    <input v-model="ProductName" type="text"><br>
    <span>Product Price: </span>
    <input v-model="ProductPrice" type="number"><br>
    <span>Product Shop:</span><br>
    <ul>
        <li v-for="shop in Shops" :key="shop">
            {{shop.ShopName}} 
            <button @click="selectProductShop(shop.objectId)">Select</button>
        </li>
    </ul>
    <span>Selected ShopID: {{ProductShopID}}</span><br>
    <span>Product Image: </span>
    <input @change="onProductImageSelected" type="file" name="img" accept="image/x-png,image/gif,image/jpeg"/><br>
    <button @click="addProduct()">Add Product</button>

    <h3>Show / Edit / Delete Product</h3>
    <span>New Product Name: </span>
    <input v-model="NewProductName" type="text"><br>
    <span>New Product Price: </span>
    <input v-model="NewProductPrice" type="number"><br>
    <span>New Product Image: </span>
    <input @change="onNewProductImageSelected" type="file" name="img" accept="image/x-png,image/gif,image/jpeg"/><br>
    <ul>
        <li v-for="product in Products" :key="product">
            {{product.ProductName}} 
            <button @click="editProduct(product.objectId)">Edit</button>
            <button @click="deleteProduct(product.objectId)">Delete</button>
            <button @click="showProduct(product.objectId)">Show</button>
        </li>
    </ul>

    <!--SHOPS-->
    <h3>Add Shop</h3>
    <span>Shop Name: </span>
    <input v-model="ShopName" type="text"><br>
    <span>Shop Image: </span>
    <input @change="onShopImageSelected" type="file" name="img" accept="image/x-png,image/gif,image/jpeg"/><br>
    <button @click="addShop()">Add Shop</button>

    <!--CATEGORIES-->
    <h3>Add Category</h3>
    <span>Category Name: </span>
    <input v-model="CategoryName" type="text"><br>
    <button @click="addCategory()">Add Category</button>

    <!--SHIPPING FEES-->
    <h3>Add Shipping Fee</h3>
    <span>Shipping Fee Price: </span>
    <input v-model="ShippingFeePrice" type="number"><br>
    <button @click="addShippingFee()">Add Shipping Fee</button>
</template>

<script>
    import Parse from 'parse';
    export default{
        data(){
            return{
                //Account Variables
                loggedIn: false,

                //Product Variables
                ProductName: '',
                ProductPrice: '',
                ProductShopID: '',
                ProductImage: '',
                ProductImageName: '',

                NewProductName: '',
                NewProductPrice: '',
                NewProductImage: '',
                NewProductImageName: '',
                Products: [],

                //Shop Variables
                ShopName: '',
                ShopImage: '',
                ShopImageName: '',
                Shops: [],

                //Category Variables
                CategoryName: '',
                Categories: [],

                //Shipping Fee Variables
                ShippingFeePrice: '',
                ShippingFees: [],
            }
        },
        components:{
           
        },
        methods:{
            //to convert file to base64
            getBase64(file) {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = error => reject(error);
                });
            },

            //Account Functions
            async signInWithGoogle(){
                window.location.href = await Parse.Cloud.run("GoogleSignIn");
            },

            async signInWithFacebook() {
                await this.loadFacebookSDK(document, "script", "facebook-jssdk");
                await this.initFacebook();
                window.FB.login(function(response) {
                    if (response.authResponse) {
                        const authData = {
                            "id": response.authResponse.userID,
                            "access_token": response.authResponse.accessToken,
                            "expiration_date": response.authResponse.expiresIn,
                        }
                        window.FB.api('/me', function(data) {
                            const user = new Parse.User();
                            user.set("username", data.name);
                            var names = data.name.split(' ');
                            user.set("firstname", names[0]);
                            user.set("lastname", names[names.length - 1]);
                            user.linkWith("facebook", { authData }).then(async (_obj)=>{
                                await Parse.User.logInWith('facebook', { authData });
                                window.location.href ='https://' + window.location.host + '/SignUpTest';
                            });
                        });
                    }
                    else {
                        alert("User cancelled login or did not fully authorize.");
                    }
                });
            },

            async initFacebook() {
                return new Promise((resolve, _reject) => {
                    window.fbAsyncInit = function() {
                        window.FB.init({
                            appId: "490657576400793", //You will need to change this
                            cookie: true, // This is important, it's not enabled by default
                            version: "v13.0"
                        });
                        resolve();
                    };
                });
            },

            async loadFacebookSDK(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            },
            
            async logOut(){
                await Parse.User.logOut();
                await this.loadFacebookSDK(document, "script", "facebook-jssdk");
                await this.initFacebook();
                window.FB.getLoginStatus(function(response) {
                    if (response.status === 'connected') {
                        window.FB.logout();
                    }
                });
                this.$router.go(0); //refresh the page
            },

            //Product Functions
            async getProducts(){
                this.Products = JSON.parse(await Parse.Cloud.run("GetProducts"));
            },

            async addProduct(){
                var params = {
                    "ProductName" : this.ProductName,
                    "ProductPrice" : this.ProductPrice,
                    "ProductShopID" : this.ProductShopID,
                    "ProductImage" : this.ProductImage,
                    "ProductImageName" : this.ProductImageName,
                }
                await Parse.Cloud.run("AddProduct", params).then(()=>{
                    alert("Added Product");
                });
                this.getProducts();
            },

            async editProduct(ProductID){
                var params = {
                    "ProductID" : ProductID,
                    "ProductName" : this.NewProductName,
                    "ProductPrice" : this.NewProductPrice,
                }
                await Parse.Cloud.run("EditProduct", params).then(()=>{
                    alert("Edited Product");
                });
                this.getProducts();
            },

            async deleteProduct(ProductID){
                var params = {
                    "ProductID" : ProductID,
                }
                await Parse.Cloud.run("DeleteProduct", params).then(()=>{
                    alert("Deleted Product");
                });
            },

            selectProductShop(ProductID){
                this.ProductShopID = ProductID;
            },

            onProductImageSelected(e){
                var file = e.target.files[0];
                this.ProductImageName = file.name;
                this.getBase64(file).then(
                    data => this.ProductImage = data
                );
            },

            onNewProductImageSelected(e){
                var file = e.target.files[0];
                this.NewProductImageName = file.name;
                this.getBase64(file).then(
                    data => this.NewProductImage = data
                );
            },
            
            showProduct(ProductID){
                this.$router.push({
                    name: 'ProductPageTest',
                    query: {
                        ProductID : ProductID,
                    }
                })
            },

            //Shop Functions
            async getShops(){
                this.Shops = JSON.parse(await Parse.Cloud.run("GetShops"));
            },

            async addShop(){
                var params = {
                    "ShopName" : this.ShopName,
                    "ShopImage" : this.ShopImage,
                    "ShopImageName" : this.ShopImageName,
                }
                await Parse.Cloud.run("AddShop", params).then(()=>{
                    alert("Added Shop");
                });
                this.getShops();
            },

            onShopImageSelected(e){
                var file = e.target.files[0];
                this.ShopImageName = file.name;
                this.getBase64(file).then(
                    data => this.ShopImage = data
                );
            },

            //Category Functions
            async addCategory(){
                var params = {
                    "CategoryName" : this.CategoryName,
                }
                await Parse.Cloud.run("AddCategory", params).then(()=>{
                    alert("Added Category");
                });
            },

            //ShippingFee Functions
            async addShippingFee(){
                var params = {
                    "ShippingFeePrice" : this.ShippingFeePrice,
                }
                await Parse.Cloud.run("AddShippingFee", params).then(()=>{
                    alert("Added Shipping Fee");
                });
            },
        },
        beforeMount(){
            //this runs before page loads
            this.getProducts();
            this.getShops();
            var currentUser = Parse.User.current();
            if (currentUser) {
                this.loggedIn = true;
            }
            else{
                this.loggedIn = false;
            }
        },
    }
</script>