<template>
	<div class="container">
		<table class="table mt-3">
			<thead class="thead-light">
				<tr>
					<th scope="col">Sign up at</th>
					<th scope="col">Email</th>
					<th scope="col">Guest name</th>
					<th scope="col">Ticket type</th>
					<th scope="col">Cost</th>
					<th scope="col">Privilegies</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="guest in guests" :key="guest.id">
					<th scope="row">{{ guest.created_at }}</th>
					<th>{{ guest.email }}</th>
					<th>{{ guest.first_name }} {{ guest.last_name }}</th>
					<th>Free</th>
					<th>$100</th>
					<th>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nobis eligendi harum laudantium quod, corrupti velit quidem dignissimos commodi deserunt error excepturi eos voluptate repellat, sed facere, quos adipisci non!</th>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	export default {
		name: 'Event',
		mounted() {
			if(this.guests.length) {
				return
			}
			this.$store.dispatch('getEventGuests', this.$route.params.id)
		},
		computed: {
			guests() {
				return this.$store.getters.guests
			}
		}
	}
</script>