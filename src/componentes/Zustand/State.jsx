import { create } from "zustand";

const useStore = create((set)=>({
  lista : [],
  add: (item) => set((state)=> ({lista: [...state.lista, item]}) ),
  removeItem: (item) => set((state) => ({ lista: state.lista.filter((el) => el !== item) })),
}))

export default useStore

