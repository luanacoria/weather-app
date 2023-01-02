import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CityList from "./CityList";

const cities = [
	{
		city: "Buenos Aires",
		country: "Argentina",
	},
	{
		city: "Bogotá",
		country: "Colombia",
	},
	{
		city: "Madrid",
		country: "España",
	},
	{
		city: "Ciudad de México",
		country: "México",
	},
];

test("CityList renders", async () => {
	const { findAllByRole } = render(<CityList cities={cities} />);

	const items = await findAllByRole("listitem");

	expect(items).toHaveLength(4);
});

test("CityList click on item", async () => {
	const fnClickOnItem = jest.fn();

	const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />);

	const items = await findAllByRole("listitem")
	
	fireEvent.click(items[0])

	expect(fnClickOnItem).toHaveBeenCalledTimes(1)

});
