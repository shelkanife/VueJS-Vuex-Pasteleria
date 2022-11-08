<template>
    <footer>
        <LogoComponent id="logoComponent"/>
        <section id="adress">
            <p>Dirección: Calle siempre viva #123, local #456</p>
            <p>T&eacute;lefono: 2244881216</p>
            <p>Horarios de antenci&oacute;n: Martes - Domingo 10:00 - 20:00 hrs.</p>
        </section>
    </footer>
</template>

<script>
import LogoComponent from './LogoComponent.vue'

export default {
    name:'FooterComponent',
    components:{
        LogoComponent
    }
}
</script>

<style>

footer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: 50px;
    padding-right: 50px;
    background-color: gray;
    padding-top: 10px;
    padding-bottom: 10px;
}
#adress{
    display: flex;
    flex-direction: column;
    font-family: 'Josefin Sans', sans-serif;
    color:white;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
}
@media only screen and (max-width: 860px){
    footer{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    footer #logoComponent section{
        padding: 0 0;
    }
    
}
</style>