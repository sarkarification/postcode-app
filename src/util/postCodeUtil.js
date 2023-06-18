import axios from "axios";

const baseUrl = "https://api.postcodes.io/postcodes/";

const getPostCode = async (postCode) => {
  const url = baseUrl + postCode;
  return axios.get(url);
};

const validatePostCodes = async (postCode) => {
  const url = baseUrl + postCode + "/validate";
  return axios.get(url);
};

const getNearestPostCodes = async (postCode) => {
  const url = baseUrl + postCode + "/nearest";
  return axios.get(url);
};

const autoFillPostCodes = async (postCode) => {
  const url = baseUrl + postCode + "/autocomplete";
  return axios.get(url);
};

const getApis = {
  getPostCode,
  getNearestPostCodes,
  autoFillPostCodes,
  validatePostCodes,
};

export default getApis;
