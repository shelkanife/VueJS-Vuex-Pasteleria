<template>
    <header id="header">
        <LogoComponent id="logoComponent"/>
        <ul id="nav" v-bind:class="isHidden">
            <li class="item">
                <router-link to="/order">Pedido personalizado</router-link>
            </li>
            <li class="item">
                <router-link to="/baker">Página del pastelero</router-link>
            </li>
        </ul>
        <!-- hamburger icon -->
        <a href="#" class="icon"  @click="toggleHide" >
            <i class="fa fa-bars"></i>
        </a>
    </header>
</template>

<script>
import LogoComponent from './LogoComponent.vue'
export default {
    el:"#header",
    name:'HeaderComponent',
    components:{
        LogoComponent
    },
    data() {
        return{
            hidden:true
        }
    },
    methods:{
        toggleHide(){
            this.hidden=!this.hidden
            return{
                show:this.hidden,
                hidden:!this.hidden
            }
        }
    },
    computed:{
        isHidden(){
            return{
                hide:this.hidden,
                show:!this.hidden
            }
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500&family=Josefin+Sans:wght@600&display=swap');

@media only screen and (min-width: 861px){
    header{
        background-color: #E4670C;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #nav{
        display: flex;
        list-style: none;
        justify-content: center;
        align-items: center;
        color: white;
        padding: 0px;
    }
    .icon{
        display: none;
    }
    .item:hover{
        border-bottom: 1px solid white;
        cursor: pointer;
    }

    #nav .item a{
        color: white;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 20px;
        display: block;
        font-family: 'Josefin Sans', sans-serif;
    }

    a:visited{
        color: white;
    }
}

@media only screen and (max-width: 860px){
    header{
        display: block;
        background-color: #E4670C;

    }
    #nav{
        width: 100%;
        background-color: #E4670C;
    }
    .item{
        color: #E4670C;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 20px;
        display: block;
        font-family: 'Josefin Sans', sans-serif;
    }
    
    .icon{
        display: block;
        position: absolute;
        top: 45px;
        right: 50px;
        color: white;
        font-size: 25px;
    }
    #nav .item:hover{
        border-top:1px solid white;
        background-color: white;
        border-bottom: 1px solid #E4670C;
    }
    #nav .item:hover a{
        color: #E4670C;
    }
    .hide{
        display: none;
    }
    .show{
        display: block;
    }
    a:visited{
        color: white;
    }
}

</style>