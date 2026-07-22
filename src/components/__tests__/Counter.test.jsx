import { screen, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Counter } from "../Counter";
import { describe, expect, it } from "vitest";

describe("Counter", () => {
    it("should increment the counter on increment button click", async () => {
        const user = userEvent.setup();
        render(<Counter />);

        const counter = screen.getByTestId("counter");
        const incrementBtn = screen.getByRole("button", { name: "Increment"});
        await user.click(incrementBtn);
        await user.click(incrementBtn);

        expect(counter.textContent).toEqual("2");
    });

    it("should decrement counter on decrement button click", async () => {
        const user = userEvent.setup();
        render(<Counter />);

        const counter = screen.getByTestId("counter");
        const decrementBtn = screen.getByRole("button", { name: "Decrement" });
        await user.click(decrementBtn);
        await user.click(decrementBtn);

        expect(counter.textContent).toEqual("-2");
    });
});