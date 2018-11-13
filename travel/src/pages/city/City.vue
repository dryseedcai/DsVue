<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list
                :cities="cities"
                :hotCities="hotCities"
                :letter="letter">
        </city-list>
        <city-alphabet
                :cities="cities"
                @change="handleLetterChange"></city-alphabet>
    </div>
</template>

<script>
    import CityHeader from './components/Header.vue'
    import CitySearch from './components/Search.vue'
    import CityList from './components/List.vue'
    import CityAlphabet from './components/Alphabet.vue'
    import axios from 'axios'

    export default {
        name: "City",
        components: {
            CityAlphabet,
            "city-header": CityHeader,
            "city-search": CitySearch,
            "city-list": CityList,
            "city-alphabet": CityAlphabet
        },
        data() {
            return {
                cities: {},
                hotCities: [],
                letter: ''
            }
        },
        mounted() {
            this.getCityInfo()
        },
        methods: {
            getCityInfo() {
                axios.get('/api/city.json').then(this.handleGetCityInfoSucc);
            },
            handleGetCityInfoSucc(result) {
                result = result.data
                if (result.ret && result.data) {
                    const data = result.data
                    console.log(data);
                    this.cities = data.cities
                    this.hotCities = data.hotCities
                }
            },
            handleLetterChange(letter) {
                this.letter = letter
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>