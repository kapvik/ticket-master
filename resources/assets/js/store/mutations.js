import * as types from './mutations-types'

export const mutations = {
	[types.GET_EVENTS](state, payload) {
		state.events.push(...payload)
	}
}