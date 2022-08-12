//reducer cases
export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL": {
      console.log("action", action);
      return action.payload;
    }
    case "CREATE": {
      console.log("action", action);
      return [...posts, action.payload];
    }
    case "UPDATE": {
      console.log("action", action);
      // return [...posts, action.payload];
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    }
    case "DELETE": {
      console.log("action", action);
      return posts.filter((restPosts) => restPosts._id !== action.payload._id);
    }
    default:
      return posts;
  }
};
