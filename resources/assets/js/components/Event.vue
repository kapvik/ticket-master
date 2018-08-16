<template>
	<div class="container">
		<table class="table mt-3 table-responsive">
			<thead class="thead-light">
				<tr>
					<th scope="col">Sign up</th>
					<th scope="col">Email</th>
					<th scope="col">Guest name</th>
					<th scope="col">Ticket type</th>
					<th scope="col">Cost</th>
					<th scope="col">Privilegies</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="guest in guests" :key="guest.id">
					<th scope="row">{{ guest.created_at | moment("Do [of] MMMM [at] kk:mm") }}</th>
					<th>{{ guest.email }}</th>
					<th>{{ guest.first_name }} {{ guest.last_name }}</th>
					<th class="text-capitalize">{{ guest.ticket.type }}</th>
					<th>${{ guest.ticket.cost }}</th>
					<th>{{ guest.ticket.description }}</th>
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