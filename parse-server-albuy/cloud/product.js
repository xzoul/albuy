Parse.Cloud.define("AddProduct", async(request) => {
    const Product = Parse.Object.extend("Product");
    const product = new Product();
    const argument = request.params;

    product.save({
        "ProductName" : argument.ProductName,
        "ProductPrice" : argument.ProductPrice,
    }).then(()=>{
        console.log("Successfully added Product!");
    });
});

//Must specify id of product with name of "ProductID" then the attribute name along with the new value
Parse.Cloud.define("EditProduct", async(request) =>{
    const Product = Parse.Object.extend("Product");
    const query = new Parse.Query(Product);
    const argument = request.params;
    query.equalTo("objectId", argument.ProductID);
    const res = await query.first();
    
    var list_of_attr = ["ProductName", "ProductPrice",];
    var list_of_arguments = [argument.ProductName, argument.ProductPrice,];

    for(let i = 0; i < list_of_attr.length; ++i){
        if(list_of_arguments[i] != null){
            res.set(list_of_attr[i], list_of_arguments[i]);
        }
    }

    res.save().then(()=>{
        console.log("Successfully Edited Product");
    });
});

//Must specify id of Product with name of "ProductID"
Parse.Cloud.define("DeleteProduct", async(request) =>{
    const Product = Parse.Object.extend("Product");
    const query = new Parse.Query(Product);
    const argument = request.params;
    query.equalTo("objectId", argument.ProductID);
    const res = await query.first();
    res.destroy().then(()=>{
        console.log("Successfully Deleted Product");
    });
});

//Must specify id of Product with name of "ProductID"
//Returns the data of a product
Parse.Cloud.define("GetProductData", async(request) => {
    const Product = Parse.Object.extend("Product");
    const query = new Parse.Query(Product);
    const argument = request.params;
    query.equalTo("objectId", argument.ProductID);
    const res = await query.first();
    return JSON.stringify(res);
});

Parse.Cloud.define("GetProducts", async(_request) => {
    const Product = Parse.Object.extend("Product");
    const query = new Parse.Query(Product);
    const res = await query.find();
    return JSON.stringify(res);
});