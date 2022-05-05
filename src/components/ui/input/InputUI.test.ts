import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import InputUI from "./InputUI.vue";

import { provide } from "@/styles/theme";
const mock = { id: 1, label: "Little Input" };

describe("InputUI", () => {
  it("should render a input with label", () => {
    const w = mount(InputUI, { props: { label: mock.label }, provide });
    expect(w.get("label").text()).toContain(mock.label);
  });

  it("should match a snapshot", () => {
    const w = mount(InputUI, { props: { label: mock.label }, provide });
    expect(w.element).toMatchSnapshot();
  });
});
