<template>
	<div class="container mt-5">
		<form @submit.prevent="register()">
			<div class="row d-flex justify-content-center">
				<div class="col-md-5 col-sm-12 mb-2 mb-md-0">
					<input
						type="name"
						class="form-control"
						id="firstName"
						name="firstName"
						placeholder="First name"
						v-model.trim="form.first_name"
						v-validate.disable="'required|alpha_spaces|min:2'"
						:class="{'border-danger': errors.has('first_name') }"
					>
					<small
						class="form-text text-danger"
						v-show="errors.has('first_name')"
					>
						{{ errors.first('first_name') }}
					</small>
				</div>
				<div class="col-md-5 col-sm-12">
					<input
						type="name" 
						class="form-control"
						name="lastName"
						placeholder="Last name"
						v-model.trim="form.last_name"
						v-validate.disable="'required|alpha_spaces|min:2'"
						:class="{'border-danger': errors.has('last_name') }"
					>
					<small
						class="form-text text-danger"
						v-show="errors.has('last_name')"
					>
						{{ errors.first('last_name') }}
					</small>
				</div>
			</div>
			<div class="row d-flex justify-content-center mt-2">
				<div class="col-md-5 col-sm-12 mb-2 mb-md-0">
					<input
						type="email"
						class="form-control"
						name="email"
						placeholder="Email"
						v-model.trim="form.email"
						v-validate.disable="'required|email'"
						:class="{'border-danger': errors.has('email') }"
					>
					<small
						class="form-text text-danger"
						v-show="errors.has('email')"
					>
						{{ errors.first('email') }}
					</small>
				</div>
				<div class="col-md-5 col-sm-12">
					<select
						class="form-control"
						name="event"
						v-model="form.event_id"
						v-validate.disable="'required'"
						:class="{'border-danger': errors.has('event') }"
					>
						<option 
							v-for="event in events"
							:key="event.id"
							:value="event.id"
							:selected="$route.params.id == event.id ? true : false"
						>
							{{ event.name }}
						</option>
					</select>
					<small
						class="form-text text-danger"
						v-show="errors.has('event_id')"
					>
						{{ errors.first('event_id') }}
					</small>
				</div>
			</div>
			<div class=" card-group card-deck col-md-10 col-sm-12 mx-auto mt-4">
				<label 
					v-for="ticket in tickets"
					:key="ticket.id"
					:for="ticket.type"
					class="card text-center border-secondary"
				>
					<input
						:id="ticket.type"
						type="radio"
						name="ticket"
						:value="ticket.id"
						v-model="form.ticket_id"
						v-validate.disable="'required'"
						:class="{'border-danger': errors.has('ticket_id') }"
					>
					<div class="card-header text-uppercase bg-secondary">
						{{ ticket.type }}
					</div>
					<div class="card-body">
						<p class="card-text">{{ ticket.description }}</p>
					</div>
					<div class="card-footer text-info">
						${{ ticket.cost }}
					</div>
				</label>
			</div>
			<div class="row d-flex justify-content-center mt-4 px-4">
				<input
					type="submit"
					class="btn col-md-2 col-sm-4 mr-md-4 mb-2"
					value="Register"
					:disabled="!disabledBtn"
					:class="{ 'btn-secondary' : !disabledBtn, 'btn-info': disabledBtn }"
					@click.prevent="validate"
				>
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
					first_name: '',
					last_name: '',
					email: '',
					ticket_id: '',
					event_id: ''
				}
		}),
		mounted() {
			this.$store.dispatch('getTickets')
			if(this.events.length) {
				return
			}
			this.$store.dispatch('getEvents')
		},
		computed: {
			events() {
				return this.$store.getters.events
			},
			tickets() {
				return this.$store.getters.tickets
			},
			disabledBtn: function() {
				return this.form.first_name != "" && this.form.last_name != "" && this.form.email != "" && this.form.ticket != "" && this.form.event != ""
			},
			errors() {
				return this.$store.getters.errors
			}
		},
		methods: {
			register(data) {
			 this.$store.dispatch('registerToEvents', data)
			},
			validate() {
				this.$validator.validateAll()
					.then(result => {
						if(result) {
							this.register(this.form)
						}
					})
			}
		}
	}
</script>