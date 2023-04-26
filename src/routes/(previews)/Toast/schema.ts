import example from './example.svelte';
import type { PreviewSchema } from '$lib/internal/helpers';

import type { Toast } from '$lib';
import code from './example.svelte?raw';

export const schema = {
	title: 'Toast',
	description: 'TODO: Add description',
	example,
	code,
	meta: {
		Provider: {},
		Root: {},
		Title: {},
		Description: {},
		Action: {},
		Close: {},
		Viewport: {},
	}
} satisfies PreviewSchema<typeof Toast>;