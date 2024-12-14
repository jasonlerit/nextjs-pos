import Page from "@/app/(web)/(dashboard)/page"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

describe("Page", () => {
  it("should render correctly", () => {
    render(<Page />)
    expect(screen.getByText("Dashboard")).toBeDefined()
  })
})
