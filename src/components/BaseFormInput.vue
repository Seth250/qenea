<template>
	<input
		type="text"
		value="value"
		@input="$emit('input', $event.target.value)"
		class=""
		required
	/>
</template>

<script>
export default {
	name: 'BaseFormInput',
	props: {
		value: String
	}
}
</script>
