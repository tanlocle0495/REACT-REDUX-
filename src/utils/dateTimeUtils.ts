import moment from "moment";

export const CONVERT_TYPE = {
  DD_MM_YYY: "DD-MM/YYYY",
};

export const convertStrDate = (formatType: string, strDate: string) => {
  return moment(strDate, formatType);
};
