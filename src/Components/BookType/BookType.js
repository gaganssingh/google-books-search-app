import React from "react";
import "./BookType.css";

export default function BookType() {
	return (
		<div className="BookType">
			<form>
				<label htmlFor="book-type">Book Type:</label>
				<select name="book-type" id="">
					<option value="ebooks">Default</option>
					<option value="free">Free</option>
					<option value="paid">Paid</option>
				</select>
			</form>
		</div>
	);
}
