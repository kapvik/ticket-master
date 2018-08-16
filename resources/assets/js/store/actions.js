import * as types from './mutations-types'

export const getEvents = ({ commit }) => {
	axios.get('/api/events')
		.then(response => commit(types.GET_EVENTS, response.data))
}

export const getTickets = ({ commit }) => {
	axios.get('/api/tickets')
		.then(response => commit(types.GET_TICKETS, response.data))
}

export const registerToEvents = ({ commit }, data ) => {
	axios.post('/api/guests', data)
		.then(response => commit(types.REGISTER_SUCCESS, response.data))
		.catch(errors => commit(types.REGISTER_FAILED, response.data.errors))
}

export const getEventGuests = ({ commit }, id) => {
	axios.get(`/api/events/${id}`)
		.then(response => commit(types.GET_GUESTS, response.data))
}