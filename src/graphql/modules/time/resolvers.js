import Time from "../../../models/Time";
import User from "../../../models/User";

export default {
  Time: {
    user: async (time) => await User.findById(time.user),
  },
  Query: {
    getTimes: async () => await Time.find(),
    getTime: async (_, { id }) => await Time.findById(id),
  },
  Mutation: {
    createTime: (_, { data }) => Time.create(data),
    updateTime: async (_, { id, data }) =>
      await Time.findByIdAndUpdate(id, data, { new: true }),
    deleteTime: async (_, { id }) => !!(await Time.findByIdAndDelete(id)),
  },
};
