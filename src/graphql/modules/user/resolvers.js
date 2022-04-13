import User from "../../../models/User";

export default {
  Query: {
    getUsers: async () => await User.find(),
    getUser: async (_, { id }) => await User.findById(id),
  },
  Mutation: {
    createUser: (_, { data }) => User.create(data),
    updateUser: (_, { id, data }) =>
      User.findByIdAndUpdate(id, data, { new: true }),
    deleteUser: async (_, { id }) => !!(await User.findByIdAndDelete(id)),
  },
};
