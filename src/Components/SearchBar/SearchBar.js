import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.handleSearchSubmit(e.target.searchTerm.value);
	};

	render() {
		return (
			<div className="SearchBar">
				<form className="search-form" onSubmit={this.onFormSubmit}>
					<label htmlFor="search">Search:</label>
					<input name="searchTerm" type="text" id="search" placeholder="e.g. javascript" />
					<button type="submit" id="search-button">
						Search
					</button>
				</form>
			</div>
		);
	}
}

export default SearchBar;
