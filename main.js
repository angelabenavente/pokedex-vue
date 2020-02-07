const app = new Vue ( {
  'el': '#app',
  data() {
    return {
      message: 'hola Vue',
      pokemon: {
        "id":1,
        "name":"bulbasaur",
        "image":"images/pokemons/bulbasaur.png",
        "types":[
           "poison",
           "grass"
        ],
        "abilities":[
           "chlorophyll",
           "overgrow"
        ],
        "experience":64,
        "height":7,
        "weight":69
     }
    }
  },
})