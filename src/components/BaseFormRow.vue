<template>
	<div class="form-row">
		<slot>
			<label>
				<slot name="label"></slot>
			</label>
			<slot name="field"></slot>
		</slot>
	</div>
</template>

<script>
export default {
	name: 'BaseFormRow'
}
</script>
