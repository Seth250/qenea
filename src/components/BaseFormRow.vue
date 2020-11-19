<template>
	<div>
		<slot name="row">
			<label>
				<slot></slot>
			</label>
			<slot name="input"></slot>
		</slot>
	</div>
</template>

<script>
export default {
	name: 'BaseFormRow'
}
</script>
