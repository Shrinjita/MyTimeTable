// Reference Firestore collection
const userCollection = db.collection("userData");

// Function to add user data
function addUserData(userId, name, email) {
  userCollection.doc(userId).set({
    name: name,
    email: email
  }).then(() => console.log("User added!"))
    .catch(error => console.error("Error adding user:", error));
}
