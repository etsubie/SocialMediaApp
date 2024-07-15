const posts = (state = { posts: [] }, action) => {
  switch (action.type) {
    case 'FETCH_BY_ID':
        return {...state, posts: state.posts.find((post) => post._id === action.payload.id)}
    case "FETCH_ALL":
      return { ...state, posts: action.payload };
    case "CREATE":
        return { ...state, posts: [...state.posts, action.payload] };
        case "UPDATE":
          return {
            ...state,
            post: state.posts.map((post) =>
              post._id === action.payload.id ? action.payload : post
            ),
          };
        case "DELETE":
          return {
            ...state,
            posts: state.posts.filter((post) => post._id !== action.payload),
          };
    default:
      return state;
  }
};

export default posts;