<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;

	console.log(data);
</script>

<section class="mx-2 my-8 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
	{#if data.data.length > 0}
		{#each data.data as user}
			<div class="border border-dashed border-gray-400 bg-white p-2">
				<img src={user.photoUrl} alt="" />
				<h2 class="mb-4 pt-2 text-lg font-bold text-gray-800 underline underline-offset-4">
					<a href={user.twitterUrl} target="_blank" rel="noopener noreferrer">{user.name}</a>
				</h2>
				{#if user.projects && user.projects.length > 0}
					<h3 class="text-md mt-2 font-semibold text-gray-600">Project:</h3>
					<ul>
						{#each user.projects as project}
							<li>
								<a href={project.url} target="_blank" class="text-blue-500 hover:underline"
									>{project.name}</a
								>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		{/each}
	{:else}
		<p class="text-center text-gray-600">No profiles found.</p>
	{/if}
</section>
