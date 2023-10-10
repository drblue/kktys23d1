/**
 * DOM helpers
 */

import { loadingSpinnerEl, searchResultEl } from "./dom-refs";

// Santas little helpers
export const hideSearchResult = () => searchResultEl.classList.add("hidden");
export const showSearchResult = () => searchResultEl.classList.remove("hidden");
export const hideLoadingSpinner = () => loadingSpinnerEl.classList.add("hidden");
export const showLoadingSpinner = () => loadingSpinnerEl.classList.remove("hidden");
