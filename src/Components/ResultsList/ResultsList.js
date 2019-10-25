import React from "react";
import "./ResultsList.css";
import Book from "../Book/Book";

export default function ResultsList(props) {
	const listOfBooks = props.bookList.items;
	let displayBooks;
	if (listOfBooks) {
		displayBooks = listOfBooks.map((book, index) => <Book book={book} key={index} />);
	}

	return (
		<div className="ResultsList">
			<ul>{displayBooks}</ul>
		</div>
	);
}
