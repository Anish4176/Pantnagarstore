import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/user";
import { ConnectToDatabase } from "@/utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    
    async session({ session }) {
      const SessionUser = await User.findOne({ email: session.user.email });
      session.user.id = SessionUser._id.toString();
      return session;
    },
    async signIn({ profile }) {
      try {
        await ConnectToDatabase();

        //already have an account
        const UserAccount = await User.findOne({ email: profile.email });

        //new user 
        if (!UserAccount) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
         
        }
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export { handler as GET, handler as POST };
