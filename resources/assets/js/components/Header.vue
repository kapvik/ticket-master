<template>
	<header>
		<nav class="nav-brand bg-info container d-flex align-items-center justify-content-between text-white py-2">
			<router-link to='/' tag='span' v-if="$route.path != '/'">
				<i class="fas fa-angle-left"></i>
			</router-link>
			<span class="h4 mb-0">Ticket Master</span>
		</nav>
	</header>
</template>

<script>
	export default {
		name: 'Header',

	}
</script>