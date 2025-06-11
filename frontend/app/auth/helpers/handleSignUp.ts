import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../lib/firebase";
import { User } from "../../../types/Auth";
import { db } from "../../../lib/firebase";
import { doc, setDoc } from "firebase/firestore";

interface handleSignUpProps {
    form: User
}

export const handleSignUp = async ({ form }: handleSignUpProps) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
            fullname: form.fullname,
            role: form.role,
            email: form.email,
            createdAt: new Date(),
        });
        await updateProfile(userCredential.user, {
            displayName: form.fullname,
        });

        return { success: true };
    } catch (err: any) {
        return { success: false, message: err.message };
    }
}