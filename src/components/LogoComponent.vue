<template>
    <router-link to="/">
        <section id="logo">
            <img v-bind:src="require('@/assets/cakeFac.png')" id="img">
            <p id="brand">cakeFac</p>
        </section>
    </router-link>
</template>

<script>
export default {
    name:'LogoComponent'
}
</script>
<style>
    #logo{
        box-sizing: border-box;
        display: flex;
        align-items: center;
        height: 120px;
        width: 100px;
        padding: 10px 50px;
    }
    
    #brand{
        color:white;
        font-size: 20px;
        text-transform: uppercase;
        font-family: 'Josefin Sans',monospace;
    }
    
    a{
        text-decoration: none;
    }
    
    #img{
        width: 100px;
        height: 100px;
    }


    @media only screen and (max-width: 860px){
        
        #brand{
            display: none;
        }
    }
</style>