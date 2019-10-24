import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
	return (
		<div className="SearchBar">
			<form className="search-form">
				<label htmlFor="search">Search:</label>
				<input type="text" id="search" />
				<button id="search-button">Search</button>
			</form>
		</div>
	);
}
