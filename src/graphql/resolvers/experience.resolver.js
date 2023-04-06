const experienceResolvers = {
  Query: {
    getExperience: (resolver, arg, context) => {
      return context.models.Experience.find();
    },
  },
  Mutation: {
    addExperience: (resolver, arg, context) => {
      const experience = new context.models.Experience(arg.input);
      return experience.save();
    },
    editExperience: (resolver, arg, context) => {
      const experience = new context.models.Experience(arg.input);
      return experience.save();
    },
  },
};
