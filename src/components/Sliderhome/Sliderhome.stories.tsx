import React from "react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import Sliderhome from "./Sliderhome";

export default {
  title: "Sliderhome",
  decorators: [withKnobs]
};

export const Default = () => <Sliderhome />;

Default.story = {
  name: "default",
};
