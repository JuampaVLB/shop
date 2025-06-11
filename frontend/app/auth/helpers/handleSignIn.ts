import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/firebase";
import { SignInForm } from "../../../types/Auth";

interface handleSignInProps {
    form: SignInForm;
}

export const handleSignIn = async ({ form }: handleSignInProps) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, form.email, form.password);

        const user = userCredential.user;

        return { success: true, user };
    } catch (err: any) {
        return { success: false, message: err.message };
    }
}
