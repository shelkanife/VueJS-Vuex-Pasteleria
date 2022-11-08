<template>
    <div class="card">
        <img :src=flavorUrl  class="cake-img"/>
        <div class="footer-card">
            <h4 class="flavor">{{ name }}</h4>
            <p class="price">{{ amount }}Kg</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'ItemCard',
    props:{
        flavorUrl:String,
        name:String,
        amount:Number
    }
}
</script>

<style scoped>
h4,p{
    box-sizing: border-box;
    margin: 0;
}
.cake-img{
    box-sizing: border-box;
    height: 60%;
    width: 100px;
    height: 100px;
}
.card{
    display: flex;
    flex-direction: column;
    border: 1px gray solid;
    border-radius: 0px;
    width: 100px;
    height: 150px;
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 0;
}

.card:hover{
    cursor: pointer;
}
.footer-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: #7A453D;
    color: white;
    border-radius: 0;
    height: 40%;
    font-family: 'Josefin Sans', sans-serif;
}

.flavor{
    font-weight: bold;
    text-overflow: ellipsis;
}
.price{
    color:white;
}
</style>