const educationResolvers = {
  Query: {
    getEducation: (resolver, arg, context) => {
      return context.models.Education.find();
    },
  },
  Mutation: {
    addEducation: (resolver, arg, context) => {
      const education = new context.models.Education(arg.input);
      return education.save();
    },
    editEducation: (resolver, arg, context) => {
      const education = new context.models.Education(arg.input);
      return education.save();
    },
  },
};
