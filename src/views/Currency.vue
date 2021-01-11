<template>
    <div class="currency">
        <currency-component msg="Track and follow Crypto Currency "/>
        <table id="container-table" class="table table-striped table-dark">
                <thead>
                    <th scope="col">Coin</th>
                    <th scope="col">Dollar</th>
                    <th scope="col">Euro</th>
                </thead>
                <tbody>
                    <tr v-for="(value, key) in cryptos" :key="value.id">
                        <td>{{ key }}</td>
                        <td>{{ value.USD }}$</td>
                        <td>{{ value.EUR }}€</td>
                    </tr>
                </tbody>
        </table>
    </div>
</template>

<script>
import CurrencyComponent from '../components/CurrencyComponent.vue'
import axios from 'axios'
export default {
  components: { CurrencyComponent },
    name: 'Currency',
    data: () =>({
        cryptos: [],
        errors: []
    }),
    created (){
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,NEO,ZTC&tsyms=USD,EUR')
        .then(Response => {
            this.cryptos = Response.data
        })
        .catch(e => {
            this.errors.push(e)
        })
    }
}
</script>

<style scoped>

</style>