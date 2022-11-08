<template>
    <section>
        <h3 class="sub-title">Cantidad de sabores</h3>
        
        <div class="item-container">
            <ItemCard  
            v-for="(flavor,index) in this.$store.getters.flavors" 
            :key="index"
            :flavorUrl="flavor.imgURL"
            :name="flavor.name"
            :amount="flavor.amount"/>
        </div>
    
    </section>
</template>

<script>
import ItemCard from './ItemCard.vue'
export default {
    name:'FlavorAmount',
    components:{
        ItemCard
    }
}
</script>

<style scoped>

.item-container{
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    align-content: center;
    justify-content: center;
}
@media only screen and (max-width: 700px){
    .item-container{
        justify-content: flex-start;
        overflow-x: scroll;
    }
}

</style>