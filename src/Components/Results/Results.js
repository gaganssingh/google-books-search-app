import React from "react";
import "./Results.css";
import ResultsList from "../ResultsList/ResultsList";
import NoResults from "../NoResults/NoResults";

export default function Results(props) {
	const resultslist = props.searchQuery ? <ResultsList bookList={props.bookList} /> : <NoResults />;
	return <div className="Results">{resultslist}</div>;
}
