const ProjectType = `
    type Project {
        id: ID
        title: String
        description: String
        image: String
        technologies: [String]
        url: String
    }

    input ProjectInput {
        title: String
        description: String
        image: String
        technologies: [String]
        url: String
    }

    type Query {
        getProjects: [Project]
    }
    
    type Mutation {
        addProject(input: ProjectInput): Project
        editProject(input: ProjectInput): Project
    }
    
`;

export default ProjectType;
