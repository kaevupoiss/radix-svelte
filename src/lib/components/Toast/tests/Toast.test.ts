import { expect, test } from '@playwright/experimental-ct-svelte';
import Example from './ToastTest.svelte';
import { axeViolations } from '$test-helpers/axeTester.js';

test.describe('Toast', () => {
	test('No accesibility violations', async ({ mount, page }) => {
		await mount(Example);
		expect(await axeViolations(page)).toEqual([]);
	});
});