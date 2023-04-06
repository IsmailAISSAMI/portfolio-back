const projectResolvers = {
  Query: {
    getProjects: (resolver, arg, context) => {
      return context.models.Project.find();
    },
  },
  Mutation: {
    addProject: (resolver, arg, context) => {
      const project = new context.models.Project(arg.input);
      return project.save();
    },
    editProject: (resolver, arg, context) => {
      const project = new context.models.Project(arg.input);
      return project.save();
    },
  },
};
