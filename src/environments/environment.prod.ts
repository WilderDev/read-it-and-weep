export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyBcrbsZAfP5AUxbNi9N7_YJBJxCNq22D_w",
    authDomain: "cape-books-evening.firebaseapp.com",
    projectId: "cape-books-evening",
    dbRootUrl: "https://cape-books-evening-default-rtdb.firebaseio.com",
    dbBooks: "https://cape-books-evening-default-rtdb.firebaseio.com/books",
    authRootUrl: "https://identitytoolkit.googleapis.com/v1/accounts:",
    authSignUp:
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=",
    authSignIn:
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
  },
  google: {
    rootApiUrl: "https://www.googleapis.com/books/v1/",
    searchUrl: "https://www.googleapis.com/books/v1/volumes?q="
  }
};
