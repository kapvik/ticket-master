import * as types from './mutations-types'

export const mutations = {
	[types.GET_EVENTS](state, payload) {
		state.events.push(...payload)
	},
	[types.GET_TICKETS](state, payload) {
		state.tickets.push(...payload)
	},
	[types.REGISTER_SUCCESS](state, payload) {
		state.register.push(...payload)
	},
	[types.REGISTER_FAILED](state, payload) {
		state.errors.push(...payload)
	},
	[types.GET_GUESTS](state, payload) {
		state.guests.push(...payload.guests)
	}
}