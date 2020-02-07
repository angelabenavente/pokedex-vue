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
      },
      colorType: {
        "grass": "#78C850",
        "poison": "#A040A0",
        "fire": "#F08030",
        "flying": "#A890F0",
        "water": "#6890F0",
        "bug": "#A8B820",
        "normal": "#A8A878",
        "electric": "#F8D030"
      }
    }
  },
})