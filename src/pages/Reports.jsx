import React from "react";
import { generateReportForUser } from "../services/reports-api.js";

export const Reports = () => {
  return <div>{generateReportForUser(1)}</div>;
};
