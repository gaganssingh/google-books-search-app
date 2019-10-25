import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import Filters from "./Components/Filters/Filters";
import Results from "./Components/Results/Results";

class App extends React.Component {
	state = {
		printType : "all",
		bookType  : "ebooks",
		bookList  : {}
	};

	getResults(searchTerm) {
		const apiKEY = "AIzaSyDavUcDkdrV0dJXV7pheMBOf7RzUjN5bX0";
		const baseURL = "https://www.googleapis.com/books/v1/volumes";
		const printFilter = this.state.printType;
		const bookFilter = this.state.bookType;
		const params = {
			key       : apiKEY,
			q         : searchTerm,
			filter    : bookFilter,
			printType : printFilter
		};
		function formatQueryParams(params) {
			const queryItems = Object.keys(params).map(
				(key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
			);
			return queryItems.join("&");
		}
		const queryString = formatQueryParams(params);
		const url = baseURL + "?" + queryString;
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					throw new Error("Something went wrong, please try again later.");
				}
				return res;
			})
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					bookList : data,
					error    : null
				});
			})
			.catch((err) => {
				this.setState({
					error : err.message
				});
			});
	}

	handleSearchSubmit(searchTerm) {
		this.setState({
			searchQuery : searchTerm
		});
		this.getResults(searchTerm);
	}

	setPrintFilter(printFilter) {
		this.setState({
			printType : printFilter
		});
	}

	setBookFilter(bookFilter) {
		this.setState({
			bookType : bookFilter
		});
	}

	render() {
		return (
			<div className="App">
				<Header />
				<SearchBar handleSearchSubmit={(searchTerm) => this.handleSearchSubmit(searchTerm)} />
				<Filters
					setPrintFilter={(printFilter) => this.setPrintFilter(printFilter)}
					setBookFilter={(bookFilter) => this.setBookFilter(bookFilter)}
				/>
				<Results searchQuery={this.state.searchQuery} bookList={this.state.bookList} />
			</div>
		);
	}
}

export default App;
