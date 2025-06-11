export const mapFirebaseError = (message: string) => {
  if (message.includes("auth/email-already-in-use")) {
    return "This email is already in use.";
  }
  if (message.includes("auth/weak-password")) {
    return "Password should be at least 6 characters.";
  }
  if (message.includes("auth/invalid-email")) {
    return "Please enter a valid email address.";
  }
  if (message.includes("auth/too-many-requests")) {
    return "Too many failed attempts. Try again later.";
  }
  if (message.includes("auth/network-request-failed")) {
    return "Network error. Please check your connection.";
  }
  if (message.includes("auth/user-not-found")) {
    return "No account found with this email.";
  }
  return "An unexpected error occurred.";
}