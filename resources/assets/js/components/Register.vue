<template>
	<div class="container mt-5">
		<form @submit.prevent="register()">
			<div class="row d-flex justify-content-center">
				<div class="col-md-5 col-sm-12 mb-2 mb-md-0">
					<input type="name" class="form-control" id="firstName" placeholder="First name">
				</div>
				<div class="col-md-5 col-sm-12">
					<input type="name" class="form-control" id="lastName" placeholder="Last name">
				</div>
			</div>
			<div class="row d-flex justify-content-center mt-2">
				<div class="col-md-5 col-sm-12 mb-2 mb-md-0">
					<input type="email" class="form-control" id="email" placeholder="Email">
				</div>
				<div class="col-md-5 col-sm-12">
					<select class="form-control" name="event">
						<option 
							v-for="event in events"
							:key="event.id"
							:value="event.name"
							:selected="$route.params.id == event.id ? true : false"
						>
							{{ event.name }}
						</option>
					</select>
				</div>
			</div>
			<div class=" card-deck col-md-10 col-sm-12 mx-auto mt-4">
				<div v-for="ticket in tickets" :key="ticket.id" class="card text-center border-secondary">
					<div class="card-header text-uppercase bg-secondary text-white">
						{{ ticket.type }}
					</div>
					<div class="card-body">
						<p class="card-text">{{ ticket.description }}</p>
					</div>
					<div class="card-footer text-info">
						${{ ticket.cost }}
					</div>
					<input type="radio" name="ticket" value="free">
				</div>
			</div>
			<div class="row d-flex justify-content-center mt-4 px-4">
				<button
					type="submit"
					class="btn col-md-2 col-sm-4 mr-md-4 btn-info mb-2"
				>
					Register
				</button>
				<router-link :to="{path: '/'}" tag="button" class="btn btn-dark col-md-2 col-sm-4 mb-2">
					Cancel
				</router-link>
			</div>
		</form>
	</div>
</template>
<script>
	export default {
		name: 'Register',
		data:  () =>({
				form: {
					firstName: '',
					lastName: '',
					email: '',
					ticket: '',
					event: ''
				}
		}),
		mounted() {
			if(this.events.length) {
				return
			}

			this.$store.dispatch('getTickets')
			this.$store.dispatch('getEvents')
		},
		computed: {
			events() {
				return this.$store.getters.events
			},
			tickets() {
				return this.$store.getters.tickets
			}
		},
		methods: {
			register() {
			 this.$store.dispatch('registerToEvents')
			}
		}
	}
</script>