/**
 * DOM renderer
 */
import { HN_SearchResponse } from "../services/HackerNewsAPI.types";
import { showSearchResult } from "./dom-helpers";
import { nextBtnEl, pageEl, prevBtnEl, searchResultListEl } from "./dom-refs";

// Render search results
export const renderSearchResults = (searchResult: HN_SearchResponse | null, page: number) => {
	// Show the search results
	showSearchResult();

	// If we don't have any search results, render a message
	if (!searchResult) {
		searchResultListEl.innerHTML = `<li class="list-group-item">No search results</li>`;
		return;
	}

	// Render search results
	searchResultListEl.innerHTML = searchResult.hits
		.map((result) =>
			`<a href="${result.url}" class="list-group-item list-group-item-action">
				<h2 class="h5 mb-1">${result.title}</h2>
				<p class="text-muted-small mb-0">
					${result.points} points by ${result.author} at ${new Date(result.created_at).toLocaleString()}
				</p>
			</a>`
		)
		.join("");

	// Disable the previous button if we're on the first page
	prevBtnEl.disabled = page === 0;

	// Disable the next button if we're on the last page
	nextBtnEl.disabled = page === searchResult.nbPages - 1;

	// Update the current page
	pageEl.innerText = String(page + 1);
}

