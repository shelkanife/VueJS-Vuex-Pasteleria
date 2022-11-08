<template>
    <section>
        <h3 class="sub-title">Cantidad de adornos</h3>
        <div class="item-container">
            <ItemCard
            v-for="(ornament,index) in this.$store.getters.ornamentsL"
            :key="index"
            :flavorUrl="ornament.imgURL"
            :name="ornament.name"
            :amount="ornament.amount"/>
        </div>
    </section>
</template>
<script>
import ItemCard from './ItemCard.vue'
export default {
    name:'OrnamentAmount',
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
    align-items: flex-start;
    align-content: flex-end;
    justify-content: center;

}
@media only screen and (max-width: 700px){
    .item-container{
        justify-content: flex-start;
        overflow-x: scroll;
    }
}
</style>