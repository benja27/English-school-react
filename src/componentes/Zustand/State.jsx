import { create } from "zustand";

const useStore = create((set)=>({
  lista : [],
  add: (item) => set((state)=> ({lista: [...state.lista, item]}) ),
  removeItem: (item) => set((state) => ({ lista: state.lista.filter((el) => el !== item) })),
  visible: "grama",
  changeVisible: (visible) => set({visible}),
  notepad: false,
  changeNotepad: (notepad) => set({notepad}),
  tiempos : false,
  changeTiempos: (tiempos) => set({tiempos}),
}))

export default useStore

