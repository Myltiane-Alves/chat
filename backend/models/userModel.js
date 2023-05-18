import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    document: {
      type: String,
      required: true,
    },
  
  },
  { timestamps: true }
);

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      username: this.username,
    },
    "123456789"
  );

  return token;
};

const UserModel = mongoose.model("Users", userSchema);
export default UserModel;
