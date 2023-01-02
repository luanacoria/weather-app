import React from "react";
import { render } from "@testing-library/react";
import CityInfo from "./CityInfo";

test("cityInfo render", async () => {
	//Arrange
	//Act
	//Assert
	const city = "Buenos Aires";
	const country = "Argentina";

	const { findAllByRole } = render(
		<CityInfo city={city} country={country}></CityInfo>
	);
	const cityAndCountryComponent = await findAllByRole("heading");

	expect(cityAndCountryComponent[0]).toHaveTextContent(city);
	expect(cityAndCountryComponent[1]).toHaveTextContent(country);
});
