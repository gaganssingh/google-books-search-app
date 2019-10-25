import React from "react";
import "./BookType.css";

export default function BookType(props) {
	const { setBookFilter } = props;
	return (
		<div className="BookType">
			<form onChange={(e) => setBookFilter(e.target.value)}>
				<label htmlFor="book-type">Book Type:</label>
				<select name="book-type" id="">
					<option value="ebooks">All ebooks</option>
					<option value="free-ebooks">Free</option>
					<option value="paid-ebooks">Paid</option>
				</select>
			</form>
		</div>
	);
}
