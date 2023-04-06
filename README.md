# Portfolio Web App 🎓🚀

A full-stack web application built using Node.js, GraphQL, Prisma, PostgreSQL, and Next.js to showcase your professional journey. Manage your personal information, education, experience, and projects effortlessly.

## Features 🌟

- User authentication and registration 🔒
- User profile management 📝
- Add and edit education details 🎓
- Add and edit work experience details 💼
- Add and edit projects 🚀
- Responsive front-end design 📱

## Tech Stack 💻

- Back-end: Node.js, Express, GraphQL, Prisma, PostgreSQL
- Front-end: Next.js, React

## Getting Started 🚀

1. Clone the repository
   `git clone $GITHUB-URL`

2. Change the working directory
   `cd portfolio-web-app`

3. Install dependencies for the back-end and front-end

   ```
   cd back-end
   npm install
   cd ../front-end
   npm install
   ```

4. Set up environment variables for the back-end
   ```
   cd back-end
   cp .env.example .env
   ```

Update the .env file with your PostgreSQL and other configurations.

5. Run the back-end and front-end development servers

```
    cd back-end
   npm run dev
```

In a separate terminal:

```
cd front-end
npm run dev
```

6. Open your browser and navigate to [LocalHost](http://localhost:3000) to view the front-end and [Graphql](http://localhost:4000/graphql) to access the GraphQL playground.

## Deployment 🌐

Deploy the back-end and front-end separately or together using a hosting service such as Vercel, Heroku, or Render.
