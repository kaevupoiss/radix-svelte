<script lang="ts" context="module">
	import { useActions } from '$lib/internal/helpers';
	import type { BaseProps } from '$lib/internal/types';
	export type ToastCloseProps = BaseProps<'div'>;
</script>

<script lang="ts">
	type $$Props = ToastCloseProps;
</script>

<div {...$$restProps} use:useActions={$$restProps.use}>
	<slot />
</div>