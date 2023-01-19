import React, { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import CreatorListing from "../components/creatorListing";

const Home = () => {
	const [fetchError, setFetchError] = useState(null);
	const [creators, setCreators] = useState(null);

	useEffect(() => {
		const fetchCreators = async () => {
			const { data, error } = await supabase.from("creators").select();

			if (error) {
				setFetchError("Unable to fetch creators");
				setCreators(null);
				console.error(error);
			}
			if (data) {
				setCreators(data);
				setFetchError(null);
			}
		};

		fetchCreators();
	}, []);

	return (
		<div className="page home">
			{/* Show errors if any */}
			{fetchError && <p>{fetchError}</p>}

			{/* If no errors, display the creators */}
			{creators && (
				<div className="creators">
					<div className="creator-grid">
						{creators.map((creator) => (
							<CreatorListing key={creator.id} creator={creator} />
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Home;
