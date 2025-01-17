import http from "../utils/http";

const createPost = (post) => {
  return http.post("/api/posts", {
    post: post,
  });
};

const editPost = (newText, postId) => {
  return http.patch(`/api/posts/${postId}`, {
    newText: newText,
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

const editComment = (newText, postId, commentId) => {
  return http.patch(`/api/posts/comments/${postId}/${commentId}`, {
    newText: newText,
  })
}

const deleteComment = (commentId, postId) => {
  return http.del(`/api/posts/comments/${postId}/${commentId}`);
};


export default {
  createPost,
  allPosts,
  createComment,
  deletePost,
  editPost,
  deleteComment,
  editComment,
};
