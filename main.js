const app = new Vue ( {
  'el': '#app',
  data() {
    return {
      message: 'hola Vue',
      pokemons: [],
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
  created() {
    console.log('created')
    fetch('http://pokemon.pepeloper.com')
      .then(response => response.json())
      .then(pokemons => this.pokemons = pokemons)
  },
  methods: {
    removePokemon(pokemon) {
      this.pokemons = this.pokemons
      .filter(
        pokemonToRemove => pokemonToRemove.name !== pokemon.name)
    }
  }
})