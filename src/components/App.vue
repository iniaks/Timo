<template>
	<div>
		<div class='navbar navbar-inverse'>
			<div class='container-fluid'>
				<div class='navbar-brand'>美元外汇牌价监控</div>
			</div>
		</div>
		<br>
		<div class='container' id='app'>
			<transition name="fade" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
	import store from '../vuex/store'

	export default {
		store
	}
</script>

<style>
	.fade-enter-active, .fade-leave-active {
		transition: opacity .3s ease;
	}
	.fade-enter, .fade-leave-active {
		opacity: 0
	}
</style>