import prisma from '../../../prisma/client.js';
import bcrypt from 'bcrypt';

const userResolvers = {
  Query: {
    getUser: async (resolver, arg, context) => {
      console.log(context);
      const user = await prisma.prisma.user.findUnique({
        where: {
          id: arg.id,
        },
      });
      return user;
    },
  },

  Mutation: {
    register: async (res, args, context) => {
      const hashPassword = bcrypt.hashSync(args.input.password, 10);
      const user = await prisma.prisma.user.create({
        data: {
          firstName: args.input.firstName,
          lastName: args.input.lastName,
          email: args.input.email,
          password: hashPassword,
        },
      });
      return user;
    },
  },
};

export default userResolvers;
