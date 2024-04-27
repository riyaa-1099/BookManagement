import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class TokenGenerator {
  private readonly secretKey: string | undefined = process.env.SECRETKEY;

  public generate = (userID: string, isAdmin: boolean): string => {
    if (!this.secretKey) {
      throw new Error("Secret key is not defined.");
    }
    const token = jwt.sign({ userID, isAdmin }, this.secretKey, {
      expiresIn: "3d",
    });
    return token;
  };
}

export default TokenGenerator;