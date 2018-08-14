<template>
	<div class="container">
		<table class="table mt-3">
			<thead class="thead-light">
				<tr>
					<th scope="col">Date</th>
					<th scope="col">Event</th>
					<th scope="col">Guest List</th>
					<th scope="col">Registration</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="event in events" :key="event.id">
					<th scope="row">{{ event.date }}</th>
					<th>{{ event.name }}</th>
					<th>
						<router-link :to="`/event/${event.id}`">
							<button class="btn btn-light">show</button>
						</router-link>
					</th>
					<th>
						<router-link :to="`/event/${event.id}/register`">
							<button class="btn btn-info">sigh up</button>
						</router-link>
					</th>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>

	export default {
		name: 'Dashboard',
		mounted() {
			if(this.events.length) {
				return
			}

			this.$store.dispatch('getEvents')
		},
		computed: {
			events() {
				return this.$store.getters.events
			}
		}
	}
</script>