import React from "react";
import "./PrintType.css";

export default function PrintType(props) {
	const { setPrintFilter } = props;
	return (
		<div className="PrintType">
			<form onChange={(e) => setPrintFilter(e.target.value)}>
				<label htmlFor="print-type">Print Type:</label>
				<select name="print-type" id="">
					<option value="all">All Formats</option>
					<option value="books">Books</option>
					<option value="magazines">Magazines</option>
				</select>
			</form>
		</div>
	);
}
