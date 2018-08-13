import { mutations } from './mutations'
import * as actions from './actions'

const state = {
	title: 'Ticket Master',
	events: []
}

const getters = {
	events(state) {
		return state.events
	}
}

export const StoreData = {
	state,
	mutations,
	actions,
	getters
}