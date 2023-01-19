import React from "react";
import "./creator-listing.css";

const creatorListing = ({ creator }) => {
	return (
		<div className="creator-listing" key={creator.id}>
			<h3>{creator.name}</h3>
			<ul className="creator-categories">
				{creator.categories.map((category, key) => (
					<li key={key}>{category}</li>
				))}
			</ul>
		</div>
	);
};

export default creatorListing;
