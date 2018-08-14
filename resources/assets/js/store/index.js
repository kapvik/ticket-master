import { mutations } from './mutations'
import * as actions from './actions'

const state = {
	title: 'Ticket Master',
	events: [],
	tickets: [],
	guests: []
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
	}
}

export const StoreData = {
	state,
	mutations,
	actions,
	getters
}