import React from "react";
import "./Filters.css";
import PrintType from "../PrintType/PrintType";
import BookType from "../BookType/BookType";

export default function Filters() {
	return (
		<div className="Filters">
			<PrintType />
			<BookType />
		</div>
	);
}
