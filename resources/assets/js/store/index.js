import { mutations } from './mutations'
import * as actions from './actions'

const state = {
	title: 'Ticket Master',
	events: [],
	tickets: [],
	guests: [],
	register: [],
	errors: []
}

const getters = {
	events(state) {
		return state.events
	},

	tickets(state) {
		return state.tickets
	},

	guests(state) {
		return state.guests
	},

	errors(state) {
		return state.errors
	}
}

export const StoreData = {
	state,
	mutations,
	actions,
	getters
}