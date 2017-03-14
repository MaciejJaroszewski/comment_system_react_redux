export const getApp = (state) => state.get('app');
export const getBlog = (state) => getApp(state).get('blog');

export const getPosts = (state) => getBlog(state).get('posts');
export const getForm = (state) => getApp(state).get('form');
