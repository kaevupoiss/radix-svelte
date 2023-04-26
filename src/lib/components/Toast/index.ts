import Provider from './provider.svelte';
export type { ToastProviderProps } from './provider.svelte';
import Root from './root.svelte';
export type { ToastRootProps } from './root.svelte';
import Title from './title.svelte';
export type { ToastTitleProps } from './title.svelte';
import Description from './description.svelte';
export type { ToastDescriptionProps } from './description.svelte';
import Action from './action.svelte';
export type { ToastActionProps } from './action.svelte';
import Close from './close.svelte';
export type { ToastCloseProps } from './close.svelte';
import Viewport from './viewport.svelte';
export type { ToastViewportProps } from './viewport.svelte';

export const Toast = {
	Provider,
	Root,
	Title,
	Description,
	Action,
	Close,
	Viewport,
};