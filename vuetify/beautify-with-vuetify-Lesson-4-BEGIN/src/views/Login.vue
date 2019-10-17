<template>
	<v-container>
		<v-row>
			<v-col class="mx-auto mt-5" md="6">
				<v-card>
					<v-card-title>
						<h1 class="display-1">Login</h1>
					</v-card-title>
					<v-card-text>
						<v-form>
							<v-text-field label="Username" prepend-icon="mdi-account-circle" />
							<v-text-field
								:type="showPassword ? 'text' : 'password'"
								label="Password"
								prepend-icon="mdi-lock"
								:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
								@click:append="showPassword = !showPassword"
							/>
						</v-form>
					</v-card-text>
					<v-divider></v-divider>
					<v-card-actions>
						<v-btn color="success" text rounded>Register</v-btn>
						<v-spacer></v-spacer>
						<v-btn color="info" text rounded>Login</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'LoginPage',
	data() {
		return {
			showPassword: false
		}
	}
}
</script>

<style></style>
