import { CommonApi } from "./CommonAPI";
import SERVER_URL from "./serverURL";

export const userLogin= async(reqBody)=>{
  return await CommonApi("POST", `${SERVER_URL}/login`, reqBody);
}

export const userRegister = async (reqBody) => {
  return await CommonApi("POST", `${SERVER_URL}/register`, reqBody);
};
export const userGoogleLogin = async (reqBody) => {
  return await CommonApi("POST", `${SERVER_URL}/googleLogin`, reqBody);
};

export const getUser= async()=>{
    return CommonApi("GET",`${SERVER_URL}/me`)
}
export const postBooks= async(ReqBody)=>{
    return CommonApi("POST",`${SERVER_URL}/addBook`,ReqBody)
}
export const getAllBooks= async()=>{
    return CommonApi("GET",`${SERVER_URL}/getBook`)
}
export const getBookLatest= async()=>{
    return CommonApi("GET",`${SERVER_URL}/getBookLatest`)
}
export const getOneBook= async(id)=>{
    return CommonApi("GET",`${SERVER_URL}/getOneBook/${id}`)
}
export const getAllUsers=async()=>{
  return CommonApi("GET",`${SERVER_URL}/admin/get-all-user`)
}
export const getForAdminAllBooks=async()=>{
  return CommonApi("GET",`${SERVER_URL}/admin/get-all-booksForAdmin`)
}
export const getLatestBookForAdmin=async()=>{
  return CommonApi("GET",`${SERVER_URL}/admin/get-latest-booksForAdmin`)
}
 