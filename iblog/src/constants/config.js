// API MESSAGES_NOTIFICATION
export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: "loading....",
    message: "Please wait , fetching data....",
  },
  success: {
    title: "success",
    message: "Data successfully loaded",
  },
  responseFailure: {
    title: "Error",
    message:
      "An error occured while fetching response from server.Please try again",
  },
  requestFailure: {
    title: "Error",
    message: "An error occured while parsing data",
  },
  networkError: {
    title: "Error",
    message: "Unable to connect with the server.Please try again later",
  },
};

// API SERVICE CALLS

export const SERVICE_URLS = {
  userSignup: { url: "/signup", method: "POST" },
  userLogin: { url: "/login", method: "POST" },
  uploadFile: { url: "/file/upload", method: "POST" },
  createPost: { url: "/create", method: "POST" },
  getAllPosts: { url: "/posts", method: "GET", params: true },
  getPostById: { url: "/post", method: "GET", query: true },
  updatePost: { url: "/details", method: "PUT", query: true },
  deletePost: { url: "/delete", method: "DELETE", query: true },
  newComment: { url: "/newComment", method: "POST" },
};
