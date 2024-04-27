import mongoose, { Document, Schema } from "mongoose";
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  is_admin: boolean;
}

const userSchema: Schema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    is_admin: {
      type: Boolean,
      required: false
    }
  },
  { timestamps: true }
);

const UserModel = mongoose.model<IUser>("bookusers", userSchema);

export { IUser };
export default UserModel;