<template>
    <!--PRODUCTS-->
    <h3>Product Page</h3>
    <span>Product Name: {{ProductData.ProductName}}</span><br>
    <span>Product Price: {{ProductData.ProductPrice}}</span><br>
    <span>Product Shop Name: {{ShopData.ShopName}}</span><br>
    <img v-bind:src="ProductData.ProductImage">
</template>

<script>
    import Parse from 'parse';
    export default{
        name:"ProductPageTest",
        data(){
            return{
                //Product Variables
                ProductData: {},
                ShopData: {},
            }
        },
        components:{
            
        },
        methods:{
            async getProductData(ProductID){
                var param = {"ProductID" : ProductID};
                this.ProductData = JSON.parse(await Parse.Cloud.run("GetProductData", param));
                param = {"ShopID" : this.ProductData.ProductShopID};
                this.ShopData = JSON.parse(await Parse.Cloud.run("GetShopData", param));
            },
        },
        beforeMount(){
            this.getProductData(this.$route.query.ProductID);
        }
    }
</script>