<script lang="ts">
	import { Toast } from '$lib';
	import type { ResolvedProps } from '$lib/internal/helpers';
	import { onMount } from 'svelte';

	export let propsObj: ResolvedProps<typeof Toast>;

	let open: boolean = false;
	let eventDate = new Date(); // Does Svelte need useref alternative?
	let timer = 0;

	function oneWeekAway() {
		const now = new Date();
		const inOneWeek = now.setDate(now.getDate() + 7);
		return new Date(inOneWeek);
	}

	function prettyDate(date: Date) {
		return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date);
	}

	onMount(() => {
		clearTimeout(timer);
	});
</script>

<Toast.Provider swipeDirection="right">
	<button
		class="text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded bg-white px-[15px] text-[15px] font-medium leading-[35px] shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
		on:click={() => {
			open = false;
			window.clearTimeout(timer);
			timer = window.setTimeout(() => {
				eventDate = oneWeekAway();
				open = true;
			}, 100);
		}}
	>
		Add to calendar
	</button>

	<Toast.Root
		class="data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=end]:animate-swipeOut grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md bg-white p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
		bind:open
	>
		<Toast.Title class="text-slate12 mb-[5px] text-[15px] font-medium [grid-area:_title]">
			Scheduled: Catch up
		</Toast.Title>
		<Toast.Description>
			<time
				class="text-slate11 m-0 text-[13px] leading-[1.3] [grid-area:_description]"
				dateTime={eventDate.toISOString()}
			>
				{prettyDate(eventDate)}
			</time>
		</Toast.Description>
		<Toast.Action class="[grid-area:_action]" altText="Goto schedule to undo">
			<button
				class="bg-green2 text-green11 shadow-green7 hover:shadow-green8 focus:shadow-green8 inline-flex h-[25px] items-center justify-center rounded px-[10px] text-xs font-medium leading-[25px] shadow-[inset_0_0_0_1px] hover:shadow-[inset_0_0_0_1px] focus:shadow-[0_0_0_2px]"
			>
				Undo
			</button>
		</Toast.Action>
	</Toast.Root>
	<Toast.Viewport
		class="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]"
	/>
</Toast.Provider>
