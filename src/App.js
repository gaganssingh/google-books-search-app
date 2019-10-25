import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import Filters from "./Components/Filters/Filters";
import Results from "./Components/Results/Results";

class App extends React.Component {
	state = {
		searchQuery : "",
		printType   : "",
		bookType    : "",
		bookList    : {}
	};

	handleSearchSubmit(searchTerm) {
		console.log(searchTerm);
		this.setState({
			searchQuery : searchTerm
		});

		const apiKEY = "AIzaSyDavUcDkdrV0dJXV7pheMBOf7RzUjN5bX0";
		const baseURL = "https://www.googleapis.com/books/v1/volumes";
		const printFilter = `printType=${this.state.printType}`;
		const bookFilter = `filter=${this.state.bookType}`;
		const params = {
			key         : apiKEY,
			q           : this.state.searchQuery,
			printFilter,
			bookFilter
		};

		function formatQueryParams(params) {
			const queryItems = Object.keys(params).map(
				(key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
			);
			return queryItems.join("&");
		}

		const queryString = formatQueryParams(params);
		const url = baseURL + "?" + queryString;

		// console.log(url);

		fetch(url)
			.then((res) => {
				if (!res.ok) {
					throw new Error("Something went wrong, please try again later.");
				}
				return res;
			})
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
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

	// componentDidMount() {
	// 	const apiKEY = "AIzaSyDavUcDkdrV0dJXV7pheMBOf7RzUjN5bX0";
	// 	const baseURL = "https://www.googleapis.com/books/v1/volumes";
	// 	const printFilter = `printType=${this.state.printType}`;
	// 	const bookFilter = `filter=${this.state.bookType}`;
	// 	const params = {
	// 		key         : apiKEY,
	// 		q           : this.state.searchQuery,
	// 		printFilter,
	// 		bookFilter
	// 	};

	// 	function formatQueryParams(params) {
	// 		const queryItems = Object.keys(params).map(
	// 			(key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
	// 		);
	// 		return queryItems.join("&");
	// 	}

	// 	const queryString = formatQueryParams(params);
	// 	const url = baseURL + "?" + queryString;

	// 	// console.log(url);

	// 	fetch(url)
	// 		.then((res) => {
	// 			if (!res.ok) {
	// 				throw new Error("Something went wrong, please try again later.");
	// 			}
	// 			return res;
	// 		})
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			// console.log(data);
	// 			this.setState({
	// 				bookList : data,
	// 				error    : null
	// 			});
	// 		})
	// 		.catch((err) => {
	// 			this.setState({
	// 				error : err.message
	// 			});
	// 		});
	// }

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
				<SearchBar handleSearchSubmit={this.handleSearchSubmit} />
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
