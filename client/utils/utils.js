import jwt_decode from "jwt-decode";

export const getUserId = () => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded = jwt_decode(token);
      const { userId } = decoded;
      return userId;
    }
  } catch (error) {
    // invalid token format
    console.log("error: " + JSON.stringify(localStorage));
  }
};

export const phoneNumberFormat = (number) => {
  return String(number)
    .replace(/[^0-9]/g, "") // 숫자를 제외한 모든 문자 제거
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
};

export const getIsAdmin = () => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      const { isAdmin } = decoded;
      return isAdmin;
    }
  } catch (err) {
    console.log(err);
  }
};
