const EducationType = `
    type Education {
        id: ID
        institution: String
        degree: String
        date: String
    }

    input EducationInput {
        institution: String
        degree: String
        date: String
    }

    type Query {
        getEducation: [Education]
    }

    type Mutation {
        addEducation(input: EducationInput): Education
        editEducation(input: EducationInput): Education
    }

`;

export default EducationType;
