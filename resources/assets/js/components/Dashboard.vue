<template>
	<div class="container">
		<table class="table mt-3">
			<thead class="thead-light">
				<tr>
					<th scope="col">Date</th>
					<th scope="col">Event</th>
					<th scope="col">Guest List</th>
					<th scope="col">Registration</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row"> 01.05.18</th>
					<th>Show</th>
					<th>
						<router-link :to="{path: '/event/:id'}">
							<button class="btn btn-light">show</button>
						</router-link>
					</th>
					<th>
						<router-link :to="{path: '/event/:id/register'}">
							<button class="btn btn-info">sigh up</button>
						</router-link>
					</th>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	export default {
		name: 'Dashboard'
	}
</script>