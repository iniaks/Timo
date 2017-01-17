<template>
	<div style="overflow:hidden">
		<div v-for='(bank, name) in list' class='bank'>
			<h5>
				{{bank_names[bank.name]}}
			</h5>
			<div v-for='(exchange, index) in bank.exchanges' v-show='exchange.name == "USD"' class='exchange-container'>
				<div class='exchange-item'>
					<p style="color: #39ceb8;">现汇买入</p>
					<h3>
						{{exchange.buying_rate}}
						<span v-if='prev != null'>
							<span v-if='exchange.buying_rate - prev[name].exchanges[index].buying_rate < 0' style='color: #39ceb8;font-size: 12px'>↓</span>
							<span v-if='exchange.buying_rate - prev[name].exchanges[index].buying_rate > 0' style='color: #ec6941;font-size: 12px'>↑</span>
							<span v-if='exchange.buying_rate - prev[name].exchanges[index].buying_rate == 0' style='opacity: 0.5;font-size: 12px'>-</span>
						</span>

						<span v-if='prev == null' style='opacity: 0.5;font-size: 12px'>-</span>
						
					</h3>
				</div>
				<div class='exchange-item'>
					<p style="color: #ec6941;">现汇卖出</p>
					<h3>
						{{exchange.selling_rate}}
						<span v-if='prev != null'>
							<span v-if='exchange.selling_rate - prev[name].exchanges[index].selling_rate < 0' style='color: #39ceb8;font-size: 12px'>↓</span>
							<span v-if='exchange.selling_rate - prev[name].exchanges[index].selling_rate == 0' style='opacity: 0.5;font-size: 12px'>-</span>
							<span v-if='exchange.selling_rate - prev[name].exchanges[index].selling_rate > 0' style='color: #ec6941;font-size: 12px'>↑</span>
						</span>
						<span v-if='prev == null' style='opacity: 0.5;font-size: 12px'>-</span>
					</h3>
				</div>
				<p class='exchange-time'>{{bank.exchanges[0].time}}</p>
				<br>
			</div>
			<hr>
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	import {BANK_NAME_MAP} from '../../config/model.js'
	import localStorage from '../../utils/localStorageService'

	export default {
		data () {
			return {
				bank_names: BANK_NAME_MAP,
				prev: null
			}
		},
		mounted () {
			this.refresh()
			setInterval(this.refresh, 30000)
		},
		computed: {
			...mapState({
				list: state => state.Exchanges.exchanges
			})
		},
		methods: {
			...mapActions({
				getNewestExchange: 'getExchange'
			}),
			refresh: function () {
				this.prev = localStorage.get('prev')
				// console.log(this.prev['BCM'])
				for (let prop in this.bank_names) {
					this.getNewestExchange(prop)
				}
			}
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
		width: calc(100% / 3);
		text-align: center;
	}
	.exchange-item p {
		font-size: 12px;
	}
</style>