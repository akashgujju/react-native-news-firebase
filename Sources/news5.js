export async function readUserData() {
    firebase.database().ref('Users/').once('value', function (snapshot) {
        return (snapshot.val());
    });
}