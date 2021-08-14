import http from "../utils/http";

const createPost = (post) => {
  return http.post("/api/posts", {
    post: post,
  });
};

const editPost = (post, postId) => {
  return http.put(`/api/posts/${postId}`, {
    post: post,
  });
};

const deletePost = (postId) => {
  return http.del(`/api/posts/${postId}`);
};

const allPosts = () => {
  return http.get("/api/posts");
};

const createComment = (comment, postId) => {
  return http.post(`/api/posts/comments/${postId}`, {
    comment: comment,
  });
};

export default {
  createPost,
  allPosts,
  createComment,
  deletePost,
  editPost,
};
