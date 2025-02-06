const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  ASK_QUESTION: "ask-question",
  QUESTIONS: (_id: string) => `/questions/${_id}`,
  TAGS: (_id: string) => `/tags/${_id}`,
};

export default ROUTES;
