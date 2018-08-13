import * as types from './mutations-types'

export const getEvents = ({ commit }) => {
	axios.get('/api/events')
		.then(response => commit(types.GET_EVENTS, response.data))
}