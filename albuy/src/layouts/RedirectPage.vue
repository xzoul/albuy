<script>
    import Parse from 'parse';
    export default{
        async beforeMount(){
            var url = window.location;
            var searchParams = new URLSearchParams(url.search);
            var code = searchParams.get('code');
            var accountType = searchParams.get('AccountType');
            var params = {
                "code" : code,
                "AccountType" : accountType,
            };
            const authData = await Parse.Cloud.run("GoogleToken", params);
            const user = new Parse.User();
            user.set("username", authData.name);
            user.set("email", authData.email);
            var names = authData.name.split(' ');
            user.set("firstname", names[0]);
            user.set("lastname", names[names.length - 1]);
            await user.linkWith("google", { authData }).then(async (_obj)=>{
                await Parse.User.logInWith('google', { authData });
                let currentUser = Parse.User.current();
                if(currentUser){
                    if(currentUser.get("AccountID") == undefined){
                        if(accountType == "Seller"){
                            window.location.href ='https://' + window.location.host + '/s-create-shop-acc-ver2';
                        }
                        else{
                            window.location.href ='https://' + window.location.host + '/SignUpTest';
                        }
                    }
                    else{
                        if(accountType == "Seller"){
                            window.location.href ='https://' + window.location.host + '/s-product-all';
                        }
                        else{
                            window.location.href ='https://' + window.location.host + '/SignUpTest';
                        }
                    }
                }
            });   
        }
    }
</script>