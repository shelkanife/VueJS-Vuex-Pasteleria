<template>
    <div>
        <input class="selected" type="checkbox" :name="name" :id="name" v-model="checked" v-on:change="getPrice" />
        <label :for="name" class="information">
            <img :src="src" alt="" srcset="">
            <p :for="name">{{ name }}</p>
            <p :for="name">${{ cost }}</p>
        </label>
    </div>

</template>

<script>
export default {
    name:'ItemComponent',
    emits:["send-price"],
    props:{
        itemName:String,
        cost:Number,
        type:String,
        src:String,
        index:Number
    },
    data:function(){
        return{
            price:this.cost,
            checked:'',
            name:this.itemName,
            amount:1
        }
    },
    methods:{
        getPrice(){
            this.$emit('send-price',{
                isChecked:this.checked,
                price:this.price,
                name:this.name,
                type:this.type,
                index:this.index,
                amount:this.amount})
        }
    }    
}
</script>

<style scoped>

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
    }
    label{
        box-sizing: border-box;
    }
    .selected{
        height: 200px;
        width: 100px;
        opacity: 0;
        color: green;
        position: absolute;
        z-index: 9;
        margin-bottom: 20px;
    }
    .information{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 160px;
        width: 100px;
        border: 1px solid gray;
        border-radius: 15px 15px;
    }
    input[type=checkbox]:checked{
        opacity: 0.5;
    }
    label > img{
        width: 100px;
    } 
</style>