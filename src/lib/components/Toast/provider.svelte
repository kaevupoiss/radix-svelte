<script lang="ts" context="module">
	import { useActions } from '$lib/internal/helpers';
	import type { BaseProps } from '$lib/internal/types';

	type SwipeDirection = 'right' | 'left' | 'up' | 'down';

	export type ToastProviderProps = BaseProps<'div'> & {
		/** The time in milliseconds that should elapse before automatically closing each toast. */
		duration?: number;
		/** An author-localized label for each toast. Used to help screen reader users associate the interruption with a toast. */
		label?: boolean;
		/** The direction of the pointer swipe that should close the toast. */
		swipeDirection?: SwipeDirection;
		/** The distance in pixels that the swipe gesture must travel before a close is triggered. */
		swipeThreshold?: number;
	};
</script>

<script lang="ts">
	type $$Props = ToastProviderProps;
</script>

<div {...$$restProps} use:useActions={$$restProps.use}>
	<slot />
</div>
