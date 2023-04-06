const ExperienceType = `
    type Experience {
        id: ID
        title: String
        company: String
        location: String
        startDate: String
        endDate: String
        description: String
    }

    input ExperienceInput {
        title: String
        company: String
        location: String
        startDate: String
        endDate: String
        description: String
    }

    type Query {
        getExperience: [Experience]
    }

    type Mutation {
        addExperience(input: ExperienceInput): Experience
        editExperience(input: ExperienceInput): Experience
    }

`;

export default ExperienceType;
