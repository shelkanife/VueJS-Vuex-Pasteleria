<template>

    <div v-for="(item,index) in dataList" :key="index" >
        <ItemComponent :name="item.name" :cost="item.price" :src="item.imgURL" />
    </div>

</template>

<script>
import ItemComponent from './ItemComponent.vue'
export default {
    name:'CheckBox',
    components:{
        ItemComponent
    },
    props:{
        type:String,
    },
    data:function(){
        return{
            dataList: this.type == 'sabores'? 
                [
                    {name:'Chocolate',price:1,imgURL:"https://cdn-icons-png.flaticon.com/512/7095/7095673.png"},
                    {name:'Almendra',price:2,imgURL:"https://cdn-icons-png.flaticon.com/512/2224/2224240.png"},
                    {name:'Cajeta',price:3,imgURL:"https://cdn-icons-png.flaticon.com/512/6315/6315391.png"},
                    {name:'Durazno',price:4,imgURL:"https://cdn-icons-png.flaticon.com/512/6866/6866552.png"},
                    {name:'Fresa',price:5,imgURL:"https://cdn-icons-png.flaticon.com/512/6866/6866488.png"},
                    {name:'Moka',price:6,imgURL:"https://cdn-icons-png.flaticon.com/512/2302/2302566.png"},
                    {name:'Queso',price:7,imgURL:"https://cdn-icons-png.flaticon.com/512/836/836583.png"}
                ]:
                [
                    {name:'Crema pastelera',price:1,imgURL:"https://cdn-icons-png.flaticon.com/512/1669/1669108.png"},
                    {name:'Fondant',price:2,imgURL:"https://cdn-icons-png.flaticon.com/512/983/983361.png"},
                    {name:'Azúcar Glass',price:3,imgURL:"https://cdn-icons-png.flaticon.com/512/1157/1157252.png"},
                    {name:'Frutos secos',price:4,imgURL:"https://cdn-icons-png.flaticon.com/512/3828/3828064.png"},
                    {name:'Chispas de sabores',price:5,imgURL:"https://cdn-icons-png.flaticon.com/512/6823/6823969.png"},
                    {name:'Gache',price:6,imgURL:"https://cdn-icons-png.flaticon.com/512/1593/1593684.png"}
                ],
                // cost:this.price
        }
    },
    // methods:{
    //     updateTotal:function(price){
    //         alert("pushed",price)
    //         // this.total+=price
    //     }

    // }
}
</script>
<style scoped>
    div{
        display: flex;
        flex-direction: row;
        line-height: 15px;
        margin-bottom: 20px;
    }
</style>