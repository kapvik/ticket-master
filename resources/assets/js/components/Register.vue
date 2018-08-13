<template>
	<div class="container mt-5">
		<form action="">
			<div class="row d-flex justify-content-center">
				<div class="col-5">
					<input type="name" class="form-control" id="firstName" placeholder="First name">
				</div>
				<div class="col-5">
					<input type="name" class="form-control" id="lastName" placeholder="Last name">
				</div>
			</div>
			<div class="row d-flex justify-content-center mt-2">
				<div class="col-5">
					<input type="email" class="form-control" id="email" placeholder="Email">
				</div>
				<div class="col-5">
					<select class="form-control" name="" id="">
						<option value="Show">Show</option>
					</select>
				</div>
			</div>
			<div class=" card-deck col-10 mx-auto mt-4">
				<div class="card border-primary text-center">
					<div class="card-header text-uppercase bg-primary text-white">
						Free
					</div>
					<div class="card-body">
						<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officiis, qui sunt soluta quam cumque molestias accusamus, et iure tempore. Ex beatae aliquid molestias vitae eaque adipisci, tempore quod deserunt!</p>
					</div>
					<div class="card-footer text-primary">
						$0
					</div>
					<input type="radio" name="ticket" value="free">
				</div>
				<div class="card border-warning text-center">
					<div class="card-header text-uppercase bg-warning text-white">
						Free
					</div>
					<div class="card-body">
						<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officiis, qui sunt soluta quam cumque molestias accusamus, et iure tempore. Ex beatae aliquid molestias vitae eaque adipisci, tempore quod deserunt!</p>
					</div>
					<div class="card-footer text-warning">
						$0
					</div>
					<input type="radio" name="ticket" value="standart">
				</div>
				<div class="card border-success text-center">
					<div class="card-header bg-success text-uppercase text-white">
						Free
					</div>
					<div class="card-body">
						<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non officiis, qui sunt soluta quam cumque molestias accusamus, et iure tempore. Ex beatae aliquid molestias vitae eaque adipisci, tempore quod deserunt!</p>
					</div>
					<div class="card-footer text-success">
						$0
					</div>
					<input type="radio" name="ticket" value="premium">
				</div>
			</div>
			<div class="row d-flex justify-content-center mt-4">
				<button type="submit" class="btn col-2 mr-4 btn-info">Register</button>
				<router-link :to="{path: '/'}" tag="button" class="btn btn-dark col-2">
					Cancel
				</router-link>
			</div>
		</form>
	</div>
</template>
<script>
	export default {
		name: 'Register'
	}
</script>