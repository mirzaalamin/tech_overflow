const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  ASK_QUESTION: "ask-question",
  QUESTION: (_id: string) => `/question/${_id}`,
  PROFILE: (_id: string) => `/profile/${_id}`,
  TAG: (_id: string) => `/tag/${_id}`,
  SIGN_IN_WITH_OAUTH: "signin-with-oauth",
};

export default ROUTES;
