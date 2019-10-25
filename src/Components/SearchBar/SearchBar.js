import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
	onFormSubmit = (e) => {
		e.preventDefault();
		// console.log(e.target.searchTerm.value);
		this.props.handleSearchSubmit(e.target.searchTerm.value);
	};

	render() {
		return (
			<div className="SearchBar">
				<form className="search-form" onSubmit={this.onFormSubmit}>
					<label htmlFor="search">Search:</label>
					<input
						name="searchTerm"
						type="text"
						id="search"
						placeholder="Javascript"
						defaultValue="javascript"
					/>
					<button type="submit" id="search-button">
						Search
					</button>
				</form>
			</div>
		);
	}
}
//  function SearchBar(props) {

// 	const { handleSearchSubmit } = props;

// 	return (
// 		<div className="SearchBar">
// 			<form className="search-form" onSubmit={(e) => console.log(e.target.value)}>
// 				<label htmlFor="search">Search:</label>
// 				<input type="text" id="search" />
// 				<button id="search-button">Search</button>
// 			</form>
// 		</div>
// 	);
// }

export default SearchBar;
