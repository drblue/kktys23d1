import "./assets/scss/app.scss";
import { AxiosError } from "axios";
import { searchByDate } from "./services/HackerNewsAPI";
import { hideLoadingSpinner, hideSearchResult, showLoadingSpinner } from "./utils/dom-helpers";
import { nextBtnEl, prevBtnEl, searchFormEl, searchInputEl, searchQueryEl } from "./utils/dom-refs";
import { renderSearchResults } from "./utils/renderer";
import { getQueryAndPageFromURL, updateURL } from "./utils/url";

// We need to keep track of the current page
let currentPage = 0;

// We need to keep track of the current search query
let currentSearchQuery = "";

// Search for a query
const search = async (query: string, page = 0) => {
	// If we don't have a query, do nothing
	if (!query) {
		console.log("No query provided, aborting search.");
		return;
	}

	// If we're already searching for the same query on the same page, do nothing
	if (query === currentSearchQuery && page === currentPage) {
		console.log(`"${query}" on page ${page} is already loaded.`);
		return;
	}

	console.log(`Searching for "${query}" on page ${page}...`);

	// Set the current search query and page
	setSearchQuery(query, page);

	// Hide previous results while we fetch new ones
	hideSearchResult();

	// Show a loading spinner
	showLoadingSpinner();

	// Fetch search results from server and update local copy
	try {
		const searchResult = await searchByDate(query, page);

		// Hide the loading spinner
		hideLoadingSpinner();

		// Render search results
		renderSearchResults(searchResult, page);

	} catch (err) {
		// Hide the loading spinner
		hideLoadingSpinner();

		if (err instanceof AxiosError) {
			alert("Something wrong with the network. Please try again later.")

		} else if (err instanceof Error) {
			alert("Something unexpected happened. Isn't it exciting?")

		} else {
			alert("This should never happen.")
		}
	}
}

// Set the current search query and page
const setSearchQuery = (query: string, page = 0) => {
	// Update the URL
	updateURL(query, page);

	// Update the current search query
	currentSearchQuery = query;

	// Update the current page
	currentPage = page;

	// Update the search query in the DOM
	searchQueryEl.innerText = query;
}

// Reset internal state
const resetInternalState = () => {
	// Reset the current search query and page
	setSearchQuery("");

	// Hide the search result
	hideSearchResult();
}

// Capture the submit event on the search form
searchFormEl.addEventListener("submit", async (e) => {
	// Prevent the default behavior of the form
	e.preventDefault();

	// Get the search query from the input
	const query = searchInputEl.value;

	// Search for the query
	search(query);
});

// Capture the reset event on the search form
searchFormEl.addEventListener("reset", async (e) => {
	// Prevent the default behavior of the form
	e.preventDefault();

	// Clear the search input
	searchInputEl.value = "";

	// Reset the current search query and page and hide the search result
	resetInternalState();
});

// Capture click events on the previous button
prevBtnEl.addEventListener("click", () => {
	search(currentSearchQuery, currentPage - 1);
});

// Capture click events on the next button
nextBtnEl.addEventListener("click", () => {
	search(currentSearchQuery, currentPage + 1);
});

// Handle popstate and page load events
const handlePopstateAndPageLoad = () => {
	// Get the query and page from the URL
	const { query, page } = getQueryAndPageFromURL();

	// Bail if we don't have a query in the URL
	if (!query) {
		console.log("handlePopstateAndPageLoad event: No query in URL.")
		resetInternalState();
		return;
	}

	// Log popstate event
	console.log(`handlePopstateAndPageLoad event: query=${query}, page=${page}`);

	// Search for the query
	search(query, page);
}

// Capture any query in the URL on page load
window.addEventListener("load", handlePopstateAndPageLoad);

// Capture the popstate event on the window
window.addEventListener("popstate", handlePopstateAndPageLoad);

// Export something so we're considered a module, just for best practice
export {};
