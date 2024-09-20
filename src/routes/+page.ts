import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch(`https://do-things.onrender.com/api/v1/developers`);
	const data = await response.json();

	return {
		data
	};
};
