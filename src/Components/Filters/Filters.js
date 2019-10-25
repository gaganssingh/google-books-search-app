import React from "react";
import "./Filters.css";
import PrintType from "../PrintType/PrintType";
import BookType from "../BookType/BookType";

export default function Filters(props) {
	const { setPrintFilter, setBookFilter } = props;
	return (
		<div className="Filters">
			<PrintType setPrintFilter={setPrintFilter} />
			<BookType setBookFilter={setBookFilter} />
		</div>
	);
}
