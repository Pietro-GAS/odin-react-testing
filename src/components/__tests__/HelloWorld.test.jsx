import React from "react";
import { render, screen } from "@testing-library/react";
import HelloWorld from "../HelloWorld";
import { describe, expect, it } from "vitest";

describe("HelloWorld", () => {
    it("should render a h1 element", () => {
        render(<HelloWorld />);
        
        screen.debug();
        const h1 = screen.getByText("Hello World");

        expect(h1).toBeInTheDocument();
    });
});