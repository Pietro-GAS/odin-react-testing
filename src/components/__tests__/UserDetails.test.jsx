import { screen, render, waitForElementToBeRemoved } from "@testing-library/react";
import { UserDetails } from "../UserDetails";
import { describe, expect, it, vi } from "vitest";

window.fetch = vi.fn(() => {
    const user = { name: "Jack", email: "jack@email.com" };

    return Promise.resolve({
        json: () => Promise.resolve(user),
    });
});

describe("UserDetails", () => {
    it("should show a loading text while API request is in progress", async () => {
        render(<UserDetails />);
        
        const loading = screen.getByText("Loading...");

        expect(loading).toBeInTheDocument();
        await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
    });

    it("should render the user name", async () => {
        render(<UserDetails />);

        const userName = await screen.findByText("Jack");

        expect(userName).toBeInTheDocument();
    });

    it("should show an error message", async () => {
        window.fetch.mockImplementationOnce(() => {
            return Promise.reject({ message: "API is down" });
        });
        render(<UserDetails />);

        const errorMessage = await screen.findByText("API is down");

        expect(errorMessage).toBeInTheDocument();
    });
});