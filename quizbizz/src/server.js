import { Server, Model, RestSerializer } from "miragejs";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import {
  getAllVideosHandler,
  getVideoHandler,
} from "./backend/controllers/VideoController";
import { getQuizById } from "./backend/controllers/QuizController";
import { videos } from "./backend/db/videos";
import { categories } from "./backend/db/categories";
import { users } from "./backend/db/users";
import { quizzes } from "./backend/db/quizzes";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    // TODO: Use Relationships to have named relational Data
    models: {
      video: Model,
      category: Model,
      user: Model,
      like: Model,
      history: Model,
      playlist: Model,
      watchlater: Model,
      quizzes: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      server.logging = false;
      videos.forEach((item) => {
        server.create("video", { ...item });
      });
      quizzes.forEach((item) => {
        server.create("quiz", { ...item });
      });
      categories.forEach((item) => server.create("category", { ...item }));
      users.forEach((item) =>
        server.create("user", {
          ...item,
          likes: [],
          watchlater: [],
          history: [],
          playlists: [],
        })
      );
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      // video routes (public)
      this.get("/videos", getAllVideosHandler.bind(this));
      this.get("video/:videoId", getVideoHandler.bind(this));

      this.get("quiz/:quizId", getQuizById.bind(this));
    },
  });
}
