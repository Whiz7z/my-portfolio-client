import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useComponent = create(
  devtools((set) => ({
    component: "Hello",
    setComponent: (componentToSet) => {
      set({ component: componentToSet });
    },
  }))
);
