<template>
    <h3>Fill out more details here:</h3>
    {{firstname}}
</template>

<script>
    import Parse from 'parse';
    export default{
        name:"ProductPageTest",
        data(){
            return{
                firstname: '',
            }
        },
        components:{
            
        },
        methods:{
            
        },
        beforeMount(){
            this.firstname = Parse.User.current().get("firstname");
        }
    }
</script>