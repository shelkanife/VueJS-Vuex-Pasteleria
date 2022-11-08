import  Vuex from 'vuex'

const Store = new Vuex.Store({
    state:{
        orders:[],
        orderNumber:0,
        cakes:[
            {flavor:'Chocolate con vainilla',price:'452',cakeUrl:'https://i.pinimg.com/originals/4c/06/e6/4c06e624728602a9862d7ec9e9e27369.jpg'},
            {flavor:'Chocolate con fresas',price:'542',cakeUrl:'https://i.pinimg.com/originals/4c/06/e6/4c06e624728602a9862d7ec9e9e27369.jpg'},
            {flavor:'Chocolate con frutos secos',price:'358',cakeUrl:'https://i.pinimg.com/originals/4c/06/e6/4c06e624728602a9862d7ec9e9e27369.jpg'},
            {flavor:'Almendra',price:'478',cakeUrl:'https://i.pinimg.com/originals/4c/06/e6/4c06e624728602a9862d7ec9e9e27369.jpg'},
            {flavor:'Cajeta',price:'359',cakeUrl:'https://i.pinimg.com/originals/4c/06/e6/4c06e624728602a9862d7ec9e9e27369.jpg'},
            {flavor:'Durazno',price:'312',cakeUrl:'https://i.pinimg.com/originals/4c/06/e6/4c06e624728602a9862d7ec9e9e27369.jpg'},
            {flavor:'Fresa',price:'342',cakeUrl:'https://i.pinimg.com/originals/4c/06/e6/4c06e624728602a9862d7ec9e9e27369.jpg'},
            {flavor:'Moka',price:'398',cakeUrl:'https://i.pinimg.com/originals/4c/06/e6/4c06e624728602a9862d7ec9e9e27369.jpg'},
            {flavor:'Queso con chocolate',price:'578',cakeUrl:'https://i.pinimg.com/originals/4c/06/e6/4c06e624728602a9862d7ec9e9e27369.jpg'},
            {flavor:'Queso con fresas',price:'541',cakeUrl:'https://i.pinimg.com/originals/4c/06/e6/4c06e624728602a9862d7ec9e9e27369.jpg'},
            {flavor:'Queso con zarzamora',price:'512',cakeUrl:'https://i.pinimg.com/originals/4c/06/e6/4c06e624728602a9862d7ec9e9e27369.jpg'},
            {flavor:'Gourmet',price:'598',cakeUrl:'https://i.pinimg.com/originals/4c/06/e6/4c06e624728602a9862d7ec9e9e27369.jpg'},
        ],
        ornaments:[
            {ornament:'Crema pastelera',price:'212',cakeUrl:'https://images.pexels.com/photos/7525114/pexels-photo-7525114.jpeg'},
            {ornament:'Fondant',price:'154',cakeUrl:'https://images.pexels.com/photos/7525114/pexels-photo-7525114.jpeg'},
            {ornament:'Azucar glass',price:'234',cakeUrl:'https://images.pexels.com/photos/7525114/pexels-photo-7525114.jpeg'},
            {ornament:'Frutos secos',price:'187',cakeUrl:'https://images.pexels.com/photos/7525114/pexels-photo-7525114.jpeg'},
            {ornament:'Chispas de sabores',price:'159',cakeUrl:'https://images.pexels.com/photos/7525114/pexels-photo-7525114.jpeg'},
            {ornament:'Gache',price:'110',cakeUrl:'https://images.pexels.com/photos/7525114/pexels-photo-7525114.jpeg'}
        ],
        flavorList: [
            {name:'Chocolate',price:199,imgURL:"https://cdn-icons-png.flaticon.com/512/7095/7095673.png",amount:13,type:'flavorList'},
            {name:'Almendra',price:120,imgURL:"https://cdn-icons-png.flaticon.com/512/2224/2224240.png",amount:7,type:'flavorList'},
            {name:'Cajeta',price:241,imgURL:"https://cdn-icons-png.flaticon.com/512/6315/6315391.png",amount:9,type:'flavorList'},
            {name:'Durazno',price:50,imgURL:"https://cdn-icons-png.flaticon.com/512/6866/6866552.png",amount:11,type:'flavorList'},
            {name:'Fresa',price:99,imgURL:"https://cdn-icons-png.flaticon.com/512/6866/6866488.png",amount:5,type:'flavorList'},
            {name:'Moka',price:45,imgURL:"https://cdn-icons-png.flaticon.com/512/2302/2302566.png",amount:6,type:'flavorList'},
            {name:'Queso',price:143,imgURL:"https://cdn-icons-png.flaticon.com/512/836/836583.png",amount:15,type:'flavorList'}
        ],
        ornamentList:[
            {name:'Crema pastelera',price:212,imgURL:"https://cdn-icons-png.flaticon.com/512/1669/1669108.png",amount:4,type:'ornamentList'},
            {name:'Fondant',price:154,imgURL:"https://cdn-icons-png.flaticon.com/512/983/983361.png",amount:8,type:'ornamentList'},
            {name:'Azúcar Glass',price:234,imgURL:"https://cdn-icons-png.flaticon.com/512/1157/1157252.png",amount:14,type:'ornamentList'},
            {name:'Frutos secos',price:187,imgURL:"https://cdn-icons-png.flaticon.com/512/3828/3828064.png",amount:17,type:'ornamentList'},
            {name:'Chispas de sabores',price:159,imgURL:"https://cdn-icons-png.flaticon.com/512/6823/6823969.png",amount:20,type:'ornamentList'},
            {name:'Gache',price:110,imgURL:"https://cdn-icons-png.flaticon.com/512/1593/1593684.png",amount:16,type:'ornamentList'}
        ]
    },
    getters:{
        allOrders: state => state.orders,
        flavors: state => state.flavorList,
        ornaments: state => state.ornaments,
        cakes:state => state.cakes,
        ornamentsL:state => state.ornamentList
    },
    mutations:{
        add(state,order){
            state.orderNumber++
            state.orders.push({
                orderNumber:state.orderNumber,
                ...order})
        },
        substract(state,arr){
            for(let item of arr){
                state[item.type][item.index].amount-=item.amount
            }
        }
    }
})

export default Store