import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { provide } from "@/styles/theme";

import ButtonUI from "./ButtonUI.vue";

const mock = { label: "Little Button" };

describe("ButtonUI", () => {
  it("should render a button with correct label", () => {
    const w = mount(ButtonUI, {
      props: { label: mock.label },
      provide,
    });
    expect(w.text()).toContain(mock.label);
  });

  it("should render a button with full style", () => {
    const w = mount(ButtonUI, {
      props: { label: mock.label, full: true },
      provide,
    });
    expect(w.classes()).toContain("full");
  });

  it("should match a snapshot", () => {
    const w = mount(ButtonUI, {
      props: { label: mock.label, full: true },
      provide,
    });
    expect(w.element).toMatchSnapshot();
  });
});
