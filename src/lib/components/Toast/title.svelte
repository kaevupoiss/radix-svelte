<script lang="ts" context="module">
	import { useActions } from '$lib/internal/helpers';
	import type { BaseProps } from '$lib/internal/types';
	export type ToastTitleProps = BaseProps<'div'>;
</script>

<script lang="ts">
	type $$Props = ToastTitleProps;
</script>

<div {...$$restProps} use:useActions={$$restProps.use}>
	<slot />
</div>