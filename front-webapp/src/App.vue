<template>
	<div class="main-container">
		<router-view></router-view>

		<WirteJottingWnd v-show="isWriteJotting"></WirteJottingWnd>
	</div>
</template>
			
<style lang="less">
	body,
	html {
		width: 100%;
		height: 100%;
	}

	.main-container {
		position: relative;
		width: 100%;
		height: 100%;
	}
</style>

<script>

	import WirteJottingWnd from './components/common/WriteJotting.vue'

	export default {
		name: 'app',
		computed: {
			isWriteJotting: function() {
				return this.$store.state.isWriteJotting;
			}
		},
		components: { WirteJottingWnd }
	}
</script> 