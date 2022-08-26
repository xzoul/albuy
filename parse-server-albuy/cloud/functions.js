Parse.Cloud.define('hello', req => {
  req.log.info(req);
  return 'Hi';
});

Parse.Cloud.define('asyncFunction', async req => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  req.log.info(req);
  return 'Hi async';
});

Parse.Cloud.beforeSave('Test', () => {
  throw new Parse.Error(9001, 'Saving test objects is not available.');
});

Parse.Cloud.define("AddProduct", async (request) => {
  const Product = Parse.Object.extend("Product");
  const product = new Product();
  const argument = request.params;

  product.save({
    "ProductName": argument.ProductName,
    "ProductCode": argument.ProductCode,
  }).then(() => {
    console.log("Added Product!");
  });
});