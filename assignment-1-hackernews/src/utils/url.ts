/**
 * URL Utils
 */

// Get query and page from the URL
export const getQueryAndPageFromURL = () => {
	// Get the URL Search Params
	const urlParams = new URLSearchParams(window.location.search);

	// Get the query and page from the URL
	const query = urlParams.get("query") || "";
	const page = Number(urlParams.get("page")) || 0;

	// Return the query and page
	return { query, page };
}

// Update the URL to reflect the search query and page
export const updateURL = (query: string, page = 0) => {
	// Get the query and page from the URL
	const { query: urlQuery, page: urlPage } = getQueryAndPageFromURL();

	console.log(`Current URL contains query=${urlQuery} and page=${urlPage}`);
	console.log(`Want to update URL to ?query=${encodeURIComponent(query)}&page=${page}`);

	// Don't update the URL if we're already on the same page for the same query
	if (query === urlQuery && page === urlPage) {
		console.log(`We're already on page ${page} for "${query}".`);
		return;
	}

	// If we don't have a query, add a root URL to the history
	if (!query) {
		console.log("No query provided. Updating URL to /");
		window.history.pushState({}, "", "/");
		return;
	}

	// Otherwise, add the query and page to the history
	console.log(`Updating URL to ?query=${encodeURIComponent(query)}&page=${page}`);
	window.history.pushState({}, "", `?query=${encodeURIComponent(query)}&page=${page}`);
}

