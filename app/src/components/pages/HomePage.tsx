import React from "react";
import { useHistory } from "react-router";
import Button1 from "../common/Button1";

const HomePage = () => {
	const history = useHistory();

	const actionBtns = [
		{
			text: "SEARCH BY CITY",
			onClick: () => history.push("search_by_city"),
			color: "blue",
		},
		{
			text: "SEARCH BY COUNTRY",
			onClick: () => history.push("search_by_country"),
			color: "blue",
		},
	];

	return (
		<div className="flex items-center justify-center min-w-screen min-h-screen">
			<div className="flex flex-col items-center w-full h-full">
				<h1 className="text-3xl font-light">CityPop</h1>
				<p className="mt-1 text-center w-11/12 italic font-light">
					Discover the population in the city of your choice!
				</p>

				<div
					className={`
                        flex flex-col justify-between
                        mt-4
                        bigHome:flex-row
                    `}
				>
					{actionBtns.map((actionBtn) => (
						<Button1
							text={actionBtn.text}
							onClick={actionBtn.onClick}
							color={actionBtn.color}
							extraClasses={`
                                my-1
                                bigHome:mx-2
                                bigHome:my-0
                            `}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
