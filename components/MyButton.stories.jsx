import MyButton from "./MyButton";

export default {
  title: "MyButton",
  component: MyButton,
};

export const Default = {
  args: {
    bgColor: "green",
    bRadius: 10,
    customHeight: 50,
  },
};

export const Variation1 = {
    args: {
        bgColor: "blue",
        bRadius: 50,
        customHeight: 100,
    },
  };

  export const Variation2 = {
    args: {
        bgColor: "orange",
        bRadius: 25,
        customHeight: 150,
    },
  };

