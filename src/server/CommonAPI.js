import axios from "axios";
 

export const CommonApi = async (httpMethod, url, ReqBody) => {

    const Token = localStorage.getItem("Token");

    const headers = {
        
        Authorization:Token ? `Bearer ${Token}`: ""
    }
  const reqConfig = {
    method: httpMethod,
    url,
    data: ReqBody,
    headers
  };

 return await axios(reqConfig)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
