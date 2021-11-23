export const saveToken = (token: string) => {
  sessionStorage.setItem("token", token);
};

export const getToken = () => {
  sessionStorage.getItem("token");
};
