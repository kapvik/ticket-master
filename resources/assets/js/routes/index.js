import Dashboard from '../components/Dashboard.vue'
import Event from '../components/Event.vue'
import Register from '../components/Register.vue'

export const routes = [
	{
		path: '/',
		component: Dashboard
	},
	{
		path: '/event/:id',
		component: Event
	},
	{
		path: '/event/:id/register',
		component: Register,
		exact: true
	}
]