import { model, models, Schema, Types } from "mongoose";

export interface IAccount {
  _id: string;
  userId: Types.ObjectId;
  user: string;
  name: string;
  password?: string;
  image?: string;
  provider: string;
  providerAccountId: string;
}

const AccountSchema = new Schema<IAccount>(
  {
    _id: { type: String, required: true, unique: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    image: { type: String },
    password: { type: String },
    provider: { type: String, required: true },
    providerAccountId: { type: String, required: true },
  },
  { timestamps: true }
);

const Account = models.Account || model<IAccount>("Account", AccountSchema);

export default Account;
