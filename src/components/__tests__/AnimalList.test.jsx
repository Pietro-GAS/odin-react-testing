import React from "react";
import { screen, render } from "@testing-library/react";
import { AnimalList } from "../AnimalList";
import { describe, expect, it } from "vitest";

describe("AnimalList", () => {
    it("should render a list", () => {
        render(<AnimalList />);

        const listElement = screen.getByRole("list");

        expect(listElement).toBeInTheDocument();
    });

    it("the list should have a class named animals", () => {
        render(<AnimalList />);

        const listElement = screen.getByRole("list");

        expect(listElement).toHaveClass("animals");
    });

    it("the list should contain 5 items", () => {
        render(<AnimalList />);

        const listItems = screen.getAllByRole("listitem");

        expect(listItems.length).toEqual(5);
    })
})