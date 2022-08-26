<template>
    <!--PRODUCTS-->
    <h3>Product Page</h3>
    <span>Product Name: {{ProductName}}</span><br>
    <span>Product Price: {{ProductPrice}}</span><br>
</template>

<script>
    import Parse from 'parse';
    export default{
        name:"ProductPageTest",
        data(){
            return{
                //Product Variables
                ProductName: '',
                ProductPrice: '',
                ProductID: '',
            }
        },
        components:{
            
        },
        methods:{
            async getProductData(ProductID){
                var param = {"ProductID" : ProductID};
                var data = JSON.parse(await Parse.Cloud.run("GetProductData", param));
                this.ProductName = data.ProductName;
                this.ProductPrice = data.ProductPrice;
            },
        },
        beforeMount(){
            this.getProductData(this.$route.query.ProductID);
        }
    }
</script>