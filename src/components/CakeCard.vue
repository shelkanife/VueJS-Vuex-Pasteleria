<template>
    <div class="card">
        <img v-bind:src=cakeUrl  class="cake-img"/>
        <div class="footer-card">
            <h4 class="flavor">{{ flavor }}</h4>
            <p class="price">${{ price }}</p>
        </div>
    </div>
</template>


<script>
export default {
    name:'CakeCard',
    props:{
        flavor:String,
        price:String,
        cakeUrl:String
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500&family=Josefin+Sans:wght@600&display=swap');

h4,p{
    box-sizing: border-box;
    margin: 0;
}
.cake-img{
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    height: 60%;
    box-sizing: border-box;
}
.card{
    display: flex;
    flex-direction: column;
    border: 0px gray solid;
    border-radius: 30px;
    width: 300px;
    height: 300px;
    margin-bottom: 20px;
    box-sizing: border-box;
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
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    height: 20%;
    font-family: 'Josefin Sans', sans-serif;
}

.flavor{
    font-weight: bold;
    color: white;
}
.price{
    color:white;
}
</style>