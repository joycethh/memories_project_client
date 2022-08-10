//reducer cases
export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      //The logic here is that we renanme the "state" as posts,
      //and since we dipatch the function in action folder, we got the data back as action.payload
      //we can return action.payload,instead of "state";
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
