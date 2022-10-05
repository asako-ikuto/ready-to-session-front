export const state = () => ({
  playableList: [],
  playableListDetail: [
    {
      id: 3,
      name: "YELL",
      updated_at: "2022-08-27 12:33:08",
      artist_id: 3,
      artist_name: "\u3044\u304d\u3082\u306e\u304c\u304b\u308a",
      pivot: {
        user_id: 6,
        song_id: 3,
        created_at: "2022-08-27 12:33:08",
        updated_at: "2022-08-27 12:33:08",
      },
    },
    {
      id: 1,
      name: "\u30ab\u30e1\u30ec\u30aa\u30f3",
      updated_at: "2022-08-28 06:32:14",
      artist_id: 2,
      artist_name: "King Gnu",
      pivot: {
        user_id: 6,
        song_id: 1,
        created_at: "2022-08-28 06:32:14",
        updated_at: "2022-08-28 06:32:14",
      },
    },
    {
      id: 2,
      name: "\u767d\u65e5",
      updated_at: "2022-08-28 12:24:47",
      artist_id: 2,
      artist_name: "King Gnu",
      pivot: {
        user_id: 6,
        song_id: 2,
        created_at: "2022-08-28 12:24:47",
        updated_at: "2022-08-28 12:24:47",
      },
    },
    {
      id: 9,
      name: "test_song",
      updated_at: "2022-09-03 03:42:47",
      artist_id: 1,
      artist_name: "test_update",
      pivot: {
        user_id: 6,
        song_id: 9,
        created_at: "2022-09-03 03:42:47",
        updated_at: "2022-09-03 03:42:47",
      },
    },
    {
      id: 6,
      name: "testsong2",
      updated_at: "2022-09-15 03:37:07",
      artist_id: 1,
      artist_name: "test_update",
      pivot: {
        user_id: 6,
        song_id: 6,
        created_at: "2022-09-15 03:37:07",
        updated_at: "2022-09-15 03:37:07",
      },
    },
    {
      id: 10,
      name: "\u30ab\u30d6\u30c8\u30e0\u30b7",
      updated_at: "2022-09-25 04:07:51",
      artist_id: 5,
      artist_name: "aiko",
      pivot: {
        user_id: 6,
        song_id: 10,
        created_at: "2022-09-25 04:07:51",
        updated_at: "2022-09-25 04:07:51",
      },
    },
  ],
  userPlayableList: [],
  userName: "",
  userId: "",
});

export const getters = {
  playableList: (state) => state.playableList,
  playableListDetail: (state) => state.playableListDetail,
  userPlayableList: (state) => state.userPlayableList,
  userName: (state) => state.userName,
  userId: (state) => state.userId,
};

export const mutations = {
  setPlayableList(state, data) {
    state.playableList = data;
  },
  setPlayableListDetail(state, data) {
    state.playableListDetail = data;
  },
  setUser(state, payload) {
    state.userName = payload.userName;
    state.userId = payload.userId;
  },
  setUserPlayableList(state, data) {
    state.userPlayableList = data;
  },
};

export const actions = {
  async addToPlayablelist({ commit }, payload) {
    try {
      await this.$axios.$get("/sanctum/csrf-cookie").then(async (res) => {
        const response = await this.$axios
          .post("/playablelists/" + payload.song + "/add")
          .then(async (res) => {
            try {
              await this.$axios
                .$get("/sanctum/csrf-cookie")
                .then(async (res) => {
                  const response = await this.$axios.$get("/playablelists");
                  commit("setPlayableList", response);
                  this.$router.push("/home");
                });
            } catch (error) {
              console.log(error);
            }
          });
      });
    } catch (error) {
      console.log(error);
    }
  },
  async removeFromPlayablelist({ commit }, payload) {
    try {
      await this.$axios.$get("/sanctum/csrf-cookie").then(async (res) => {
        const response = await this.$axios
          .post("/playablelists/" + payload.song + "/remove")
          .then(async (res) => {
            try {
              await this.$axios
                .$get("/sanctum/csrf-cookie")
                .then(async (res) => {
                  const response = await this.$axios.$get(
                    "/playablelists/detail"
                  );
                  commit("setPlayableListDetail", response);
                });
            } catch (error) {
              console.log(error);
            }
          });
      });
    } catch (error) {
      console.log(error);
    }
  },
  async fetchPlayableList({ commit }) {
    try {
      const response = await this.$axios.$get("/playablelists");
      commit("setPlayableList", response);
    } catch (error) {
      console.log(error);
    }
  },
  async fetchPlayableListDetail({ commit }) {
    try {
      const response = await this.$axios.$get("/playablelists/detail");
      commit("setPlayableListDetail", response);
    } catch (error) {
      console.log(error);
    }
  },
  setUser({ commit }, payload) {
    commit("setUser", {
      userName: payload.userName,
      userId: payload.userId,
    });
    this.$router.push("/user-playablelist");
  },
  async showUserPlayableList({ commit }, payload) {
    try {
      const userPlayableList = await this.$axios.get(
        "/playablelists/" + payload.userId
      );
      commit("setUserPlayableList", userPlayableList.data);
      const myPlayableList = await this.$axios.$get("/playablelists/detail");
      commit("setPlayableListDetail", myPlayableList);
    } catch (error) {
      console.log(error);
    }
  },
};
