<template>
    <!--PRODUCTS-->
    <h3>Add Product</h3>
    <span>Product Name: </span>
    <input v-model="ProductName" type="text"><br>
    <span>Product Price: </span>
    <input v-model="ProductPrice" type="number"><br>
    <button @click="addProduct()">Add Product</button>

    <h3>Show / Edit / Delete Product</h3>
    <span>Product Name: </span>
    <input v-model="NewProductName" type="text"><br>
    <span>Product Price </span>
    <input v-model="NewProductPrice" type="number"><br>
    <ul>
        <li v-for="product in Products" :key="product">
            {{product.ProductName}} 
            <button @click="editProduct(product.objectId)">Edit</button>
            <button @click="deleteProduct(product.objectId)">Delete</button>
            <button @click="showProduct(product.objectId)">Show</button>
        </li>
    </ul>
</template>

<script>
    import Parse from 'parse';
    export default{
        data(){
            return{
                //Product Variables
                ProductName: '',
                ProductPrice: '',
                NewProductName: '',
                NewProductPrice: '',
                Products: [],
            }
        },
        components:{
           
        },
        methods:{
            async getProducts(){
                this.Products = JSON.parse(await Parse.Cloud.run("GetProducts"));
            },

            async addProduct(){
                var params = {
                    "ProductName" : this.ProductName,
                    "ProductPrice" : this.ProductPrice,
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

            showProduct(ProductID){
                this.$router.push({
                    name: 'ProductPageTest',
                    query: {
                        ProductID : ProductID,
                    }
                })
            },
        },
        beforeMount(){
            //this runs before page loads
            this.getProducts();
        },
    }
</script>