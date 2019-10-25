import React from "react";
import "./Book.css";

export default function Book(props) {
	const { book } = props;
	const title = book.volumeInfo.title;
	const authors = book.volumeInfo.authors;
	const bookPrice = book.saleInfo.saleability;
	let description;
	if (book.searchInfo) {
		description = <p>{book.searchInfo.textSnippet}</p>;
	} else {
		description = <p>Sorry, no description available</p>;
	}

	return (
		<li className="Book">
			<img src={book.volumeInfo.imageLinks.smallThumbnail} alt={`Cover for ${title}`} />
			<h2>{title}</h2>
			<p>{authors}</p>
			<p>{bookPrice === "FOR_SALE" ? `$${book.saleInfo.listPrice.amount}` : `Not available for sale`}</p>
			{description}
			<p>
				<a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
					Visit the Google Books store
				</a>
			</p>
		</li>
	);
}
