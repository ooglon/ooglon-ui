import { ReactNode } from "react";
import { create } from "zustand";

type Options = {
  transparentBackdrop: boolean;
};

const defaultOptions: Options = {
  transparentBackdrop: false,
};

type State = {
  content: ReactNode;
  options: Options;
};

type Actions = {
  showModal: (content: ReactNode, options?: Partial<Options>) => void;
  hideModal: () => void;
};

export const useModal = create<State & Actions>()((set) => ({
  content: undefined,
  options: defaultOptions,
  showModal: (content: ReactNode, options?: Partial<Options>) =>
    set({ content, options: { ...defaultOptions, ...options } }),
  hideModal: () => set({ content: undefined }),
}));
