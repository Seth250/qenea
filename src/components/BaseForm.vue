<template>
	<div class="form-container">
		<div>
			<h2>
				<slot name="form-header"></slot>
			</h2>
		</div>

		<form @submit.prevent="formFunction">
			<slot name="form-data"></slot>

			<BaseFormRow #default>
				<button type="submit" class="submit-button">
					<slot name="button-text">Submit</slot>
				</button>
			</BaseFormRow>

			<BaseFormRow #default>
				<p class="form-message">
					<slot name="form-message"></slot>
				</p>
			</BaseFormRow>
		</form>
	</div>
</template>

<script>
import BaseFormRow from './BaseFormRow.vue'

export default {
	name: 'BaseForm',
	components: {
		BaseFormRow
	},
	props: {
		formFunction: {
			type: Function,
			required: false
		}
	}
}
</script>
