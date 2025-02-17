import { model, models, Schema } from "mongoose";

export interface IUser {
  _id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  bio?: string;
  image: string;
  location?: string;
  portfolioWebsite?: string;
  reputation?: number;
  joinedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String },
    image: { type: String, required: true },
    location: { type: String },
    portfolioWebsite: { type: String },
    reputation: { type: String, default: 0 },
    joinedAt: { type: Date, required: true },
  },
  { timestamps: true }
);

const User = models.User || model<IUser>("User", UserSchema);

export default User;
