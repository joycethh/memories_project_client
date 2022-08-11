//reducer cases
export default (posts = [], action) => {
  console.log("action", action);
  switch (action.type) {
    case "FETCH_ALL": {
      return action.payload;
    }
    case "CREATE": {
      return [...posts, action.payload];
    }
    case "UPDATE": {
      // return [...posts, action.payload];
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    }
    default:
      return posts;
  }
};
