<template>
	<p v-if="fieldErrors">
		<ul>
			<li v-for="(error, index) in fieldErrors" :key="index">
				{{ error }}
			</li>
		</ul>
	</p>
</template>

<script>
export default {
	name: 'BaseFormError',
	props: {
		fieldErrors: {
			type: Array,
			required: false
		}
	}
}
</script>
