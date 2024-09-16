import type { PageLoad } from "./$types";
import data from "$lib/data/data.json";

export const load: PageLoad = async () => {
	return {
		data
	};
};
