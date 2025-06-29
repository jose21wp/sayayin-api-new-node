import { Schema, model, Document } from 'mongoose';

export interface User extends Document {
    email:string;
    username: string;
    password: string;
}

const UserSchema = new Schema<User>(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },

    },
    {
        timestamps: true
    }
);

const UserModel = model<User>('User', UserSchema);
export default UserModel;