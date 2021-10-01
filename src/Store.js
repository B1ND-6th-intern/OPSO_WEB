import { atom } from "recoil";

export const modifyUserDataState = atom({
  key: "modifyUserDataState",
  default: false,
});

export const buttonState = atom({
  key: "buttonStates",
  default: {
    isMenuClick: false,
    isPostClick: false,
    isUserClick: false,
    isServiceCenterClick: false,
  },
});

export const searchData = atom({
  key: "searchData",
  default: {
    keyword: "",
    isSearchClick: false,
  },
});

export const isUserData = atom({
  key: "isUserData",
  default: false,
});

export const saveImgData = atom({
  key: "saveImgData",
  default: [],
});
