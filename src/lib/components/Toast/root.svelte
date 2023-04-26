<script lang="ts" context="module">
	import { useActions } from '$lib/internal/helpers';
	import type { BaseProps } from '$lib/internal/types';

	type ToastType = 'foreground' | 'background';

	export type ToastRootProps = BaseProps<'div'> & {
		/** Control the sensitivity of the toast for accessibility purposes. For toasts that are the result of a user action, choose foreground. Toasts generated from background tasks should use background. */
		type?: ToastType;
		/** The time in milliseconds that should elapse before automatically closing the toast. This will override the value supplied to the provider. */
		duration?: number;
		/** The open state of the dialog when it is initially rendered. Use when you do not need to control its open state. */
		defaultOpen?: boolean;
		/** The controlled open state of the dialog. Must be used in conjunction with onOpenChange. */
		open?: boolean;
		/** Event handler called when the escape key is down. It can be prevented by calling event.preventDefault. */
		onEscapeKeyDown?: (event: CustomEvent<{ originalEvent: KeyboardEvent }>) => void;
		/** Event handler called when the dismiss timer is paused. This occurs when the pointer is moved over the viewport, the viewport is focused or when the window is blurred. */
		onPause?: () => void;
		/** Event handler called when the dismiss timer is resumed. This occurs when the pointer is moved away from the viewport, the viewport is blurred or when the window is focused. */
		onResume?: () => void;
		/** Event handler called when starting a swipe interaction. It can be prevented by calling event.preventDefault. */
		onSwipeStart?: (event: CustomEvent<{ originalEvent: TouchEvent }>) => void;
		/** Event handler called during a swipe interaction. It can be prevented by calling event.preventDefault. */
		onSwipeMove?: (event: CustomEvent<{ originalEvent: TouchEvent }>) => void;
		/** Event handler called at the end of a swipe interaction. It can be prevented by calling event.preventDefault. */
		onSwipeEnd?: (event: CustomEvent<{ originalEvent: TouchEvent }>) => void;
		/** Used to force mounting when more control is needed. */
		forceMount?: boolean;

		readonly 'data-state'?: 'open' | 'closed';
		readonly 'data-swipe'?: 'start' | 'move' | 'cancel' | 'end';
		readonly 'data-swipe-direction'?: 'up' | 'down' | 'left' | 'right';

		/** The offset position of the toast when horizontally swiping */
		'--radix-toast-swipe-move-x'?: number;
		/** The offset position of the toast when vertically swiping */
		'--radix-toast-swipe-move-y'?: number;
		/** The offset end position of the toast after horizontally swiping */
		'--radix-toast-swipe-end-x'?: number;
		/** The offset end position of the toast after vertically swiping */
		'--radix-toast-swipe-end-y'?: number;
	};
</script>

<script lang="ts">
	type $$Props = ToastRootProps;
</script>

<div {...$$restProps} use:useActions={$$restProps.use}>
	<slot />
</div>
