import React from "react";
import { hello } from "../services/reports-api.js";

export const Reports = () => {
  return <div>{hello(1)}</div>;
};
