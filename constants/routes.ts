const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  COLLECTIONS: "/collections",
  COMMUNITY: "/community",
  JOBS: "/jobs",
  TAGS: "/tags",
  ASK_QUESTION: "ask-question",
  QUESTION: (_id: string) => `/questions/${_id}`,
  PROFILE: (_id: string) => `/profile/${_id}`,
  TAG: (_id: string) => `/tags/${_id}`,
  SIGN_IN_WITH_OAUTH: "signin-with-oauth",
};

export default ROUTES;
