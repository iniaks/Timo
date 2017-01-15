<template>
	<div style="overflow:hidden">
		<div v-for='bank in list' class='bank'>
			<h5>
				{{bank_names[bank.name]}}
			</h5>
			<div v-for='exchange in bank.exchanges' v-show='exchange.name == "USD"' class='exchange-container'>
				<div class='exchange-item'>
					<p style="color: #39ceb8;">现汇买入</p>
					<h3>{{exchange.buying_rate}}</h3>
				</div>
				<div class='exchange-item'>
					<p style="color: #ec6941;">现汇卖出</p>
					<h3>{{exchange.selling_rate}}</h3>
				</div>
				<p class='exchange-time'>{{bank.exchanges[0].time}}</p>
			</div>
			<hr>
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	import {BANK_NAME_MAP} from '../../config/model.js'

	export default {
		data () {
			return {
				bank_names: BANK_NAME_MAP
			}
		},
		mounted () {
			this.getNewestExchange()
			setInterval(this.getNewestExchange, 30000)
		},
		computed: {
			...mapState({
				list: state => state.Exchanges.exchanges
			})
		},
		methods: {
			...mapActions({
				getNewestExchange: 'getExchange'
			})
		}
	}
</script>

<style scoped>
	hr {
		opacity: 0.3;
	}
	.exchange-time {
		opacity: 0.5;
		font-size: 12px;
	}
	.bank {
		float: left;
		overflow: hidden;
		width: calc(100% / 6);
		text-align: center;
	}
	.exchange-item p {
		font-size: 12px;
	}
</style>