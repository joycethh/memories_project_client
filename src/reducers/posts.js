//reducer cases
export default (posts = [], action) => {
  console.log("action", action);
  switch (action.type) {
    case "FETCH_ALL": {
      console.log("fetch_all", posts.length);
      return action.payload;
    }
    //The logic here is that we renanme the "state" as posts,
    //and since we dipatch the function in action folder, we got the data back through action.payload
    //we can return action.payload,instead of "state";
    case "CREATE": {
      console.log("create", posts.length);
      return [...posts, action.payload];
    }
    default:
      return posts;
  }
};
