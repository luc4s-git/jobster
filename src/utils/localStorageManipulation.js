export const addUserToLocalStorage = (user) => {
  return localStorage.setItem('user', JSON.stringify(user));
};

// TO DO: ADD TO LOGOUT FUNCTION
export const removeUserFromLocalStorage = () => {
  return localStorage.removeItem('user');
};

export const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null;
};
