import { Document, model, models, Schema, Types } from "mongoose";

export interface IUser {
  _id?: Types.ObjectId;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  image?: string;
  location?: string;
  portfolioWebsite?: string;
  reputation?: number;
  joinedAt?: Date;
}

export interface IUserDoc extends IUser, Document {}

const UserSchema = new Schema<IUser>(
  {
    _id: { type: Schema.Types.ObjectId },
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    bio: { type: String },
    image: { type: String },
    location: { type: String },
    portfolioWebsite: { type: String },
    reputation: { type: String, default: 0 },
    joinedAt: { type: Date },
  },
  { timestamps: true }
);

const User = models.User || model<IUser>("User", UserSchema);

export default User;
