<template>
    <h2 class="title">Pasteles</h2>
    <h4 class="sub-title"> Sabores y precios</h4>
    <div class="container">
        <CakeCard v-for="(cake,index) in this.$store.getters.cakes" :key="index" 
        :flavor="cake.flavor" 
        :price="cake.price"  
        :cakeUrl="cake.cakeUrl"/>
    </div>
    <h2 class="title">Adornos</h2>
    <h4 class="sub-title"> Sabores y precios</h4>
    <div class="container">
        <CakeCard v-for="(ornament,index) in this.$store.getters.ornaments" :key="index"
        :flavor="ornament.ornament"
        :price="ornament.price" 
        :cakeUrl="ornament.cakeUrl" />
    </div>

</template>

<script>
import CakeCard from './CakeCard.vue'

export default {
    name:'ContainerComponent',
    components:{
        CakeCard
    }
}
</script>

<style>

.title{
    display: flex;
    font-size: 50px;
    justify-content: center;
    color: #8A392C;
}
.sub-title{
    font-size: 30px;
    color: #7A453D;
    font-family: 'Josefin Sans',monospace;
    margin-bottom: 10px;
}
.container{
    padding: 50px;
    display: grid;
    grid-template-columns:repeat(auto-fill,300px);
    column-gap: 50px;
    justify-content: center;
}

@media only screen and (max-width: 360px){
    .container{
        grid-template-columns: auto;
    }
}
</style>