import { create } from "zustand";
import { devtools } from "zustand/middleware";
import Hello from "../components/Hello/Hello";

export const useComponent = create(
  devtools((set) => ({
    component: Hello(),
    setComponent: (componentToSet) => {
      set({ component: componentToSet });
    },
  }))
);
