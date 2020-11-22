<template>
	<input
		:type="inputType"
		:value="value"
		:id="inputId"
		@input="$emit('input', $event.target.value)"
		class=""
		required
	/>
</template>

<script>
export default {
	name: 'BaseFormInput',
	props: {
		inputType: {
			type: String,
			required: true
		},
		value: {
			type: String,
			required: true
		},
		inputId: {
			type: String,
			required: false
		}
	}
}
</script>
