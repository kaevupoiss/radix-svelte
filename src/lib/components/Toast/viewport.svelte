<script lang="ts" context="module">
	import { useActions } from '$lib/internal/helpers';
	import type { BaseProps } from '$lib/internal/types';
	export type ToastViewportProps = BaseProps<'div'> & {
		/** The keys to use as the keyboard shortcut that will move focus to the toast viewport. Use event.code value for each key from keycode.info. For meta keys, use ctrlKey, shiftKey, altKey and/or metaKey. */
		hotkey?: string[];
		/** An author-localized label for the toast region to provide context for screen reader users when navigating page landmarks. The available `{hotkey}` placeholder will be replaced for you. */
		label?: boolean;
	};
</script>

<script lang="ts">
	type $$Props = ToastViewportProps;
</script>

<div {...$$restProps} use:useActions={$$restProps.use}>
	<slot />
</div>
