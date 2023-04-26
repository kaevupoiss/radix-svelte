<script lang="ts" context="module">
	import { useActions } from '$lib/internal/helpers';
	import type { BaseProps } from '$lib/internal/types';
	export type ToastActionProps = BaseProps<'div'> & {
		/** Describe an alternative way to achieve the action for screen reader users who cannot access the toast easily. */
		altText?: string;
	};
</script>

<script lang="ts">
	type $$Props = ToastActionProps;
</script>

<div {...$$restProps} use:useActions={$$restProps.use}>
	<slot />
</div>
