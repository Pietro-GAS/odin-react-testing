import { screen, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { CustomInput, Input } from "../CustomInput";
import { describe, expect, it, vi } from "vitest";

describe("CustomInput", () => {
    it("should update the input value correctly", async () => {
        const user = userEvent.setup();
        render(<CustomInput />);

        const input = screen.getByRole("textbox");
        await user.type(input, "React");

        expect(input.value).toBe("React");
    });

    it("should call the callback every time the input value is changed", async () => {     
        const handleChange = vi.fn();
        const user = userEvent.setup();
        render(<Input handleChange={handleChange} inputValue="" />);

        const input = screen.getByRole("textbox");
        await user.type(input, "React");

        expect(handleChange).toHaveBeenCalledTimes(5);
    })
});