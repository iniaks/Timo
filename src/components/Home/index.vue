<template>
	<div>
		<div class="form-group" style="overflow: hidden; margin-top: 0">
			<div class='checkbox'>
				<label :for='bank' v-for='(bank, index) in banks' class='bank-item'>
					<input type="checkbox" :id='bank' name="bank" :value='bank' v-model='selected_banks' :disabled='index <= 0'>
					<span class="checkbox-material"><span class="check"></span></span>
					{{bank_names[bank]}}
				</label>
			</div>
		</div>
		<div class='row' style="overflow:hidden">
			<div v-for='(price, name) in list' class='col-md-4'>
				<div class='panel panel-default'>
					<div class="panel-heading">
						{{bank_names[name]}}
						<span class="label label-warning" v-if='price.best_buying' style="float: right">最佳结汇</span>
						<span class="label label-success" v-if='price.best_selling' style="float: right">最佳购汇</span>
					</div>
					<div class='panel-body'>
						<div class='exchange-container'>
							<div class='exchange-item'>
								<h3 class='price-text' :style='{color:  price.buying_trend > 0 ? "#39ceb8" : price.buying_trend == 0 ? "#333" : "#ec6941" }'>
									{{price.buying_rate}}
								</h3>
								/
								<h3 class='price-text' :style='{color:  price.selling_trend > 0 ? "#39ceb8" : price.selling_trend == 0 ? "#333" : "#ec6941" }'>
									{{price.selling_rate}}
								</h3>
							</div>
							<p class='exchange-time'>{{price.time}}</p>
						</div>
					</div>
				</div>	
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState, mapActions} from 'vuex'
	import {BANK_NAME_MAP, BANKS} from '../../config/model.js'
	import {modal} from 'vue-strap'
	import localStorage from '../../utils/localStorageService'

	export default {
		components: {
			modal
		},
		data () {
			return {
				selected_banks: localStorage.get('banks') || ['ICBC', 'ABC', 'BOC', 'CCB'],
				banks: BANKS,
				bank_names: BANK_NAME_MAP
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
				// console.log(this.prev['BCM'])
				this.getNewestExchange(this.selected_banks.join(','))
			}
		},
		watch: {
			'selected_banks': function () {
				this.refresh()
				localStorage.set('banks', this.selected_banks)
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
		overflow: hidden;
		text-align: center;
	}
	.exchange-item p {
		font-size: 12px;
	}
	.price-text {
		display: inline-block;
	}
	.bank-item {
		margin-right: 20px;
		margin-bottom: 5px;
	}
</style>