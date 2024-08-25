import { atom, selector } from "recoil";

const authState = atom({
  key: "authState", // unique ID (with respect to other atoms/selectors)
  default: {
    status: false,
    userData: null,
  },
});

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

export { textState, charCountState, authState };
