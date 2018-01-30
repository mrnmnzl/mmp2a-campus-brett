import * as firebase from 'firebase';
import './Authentification';
import { userId } from '../components/EnsureLoggedInContainer';
import { history } from '../App';

const database = firebase.database();
const postsRef = database.ref('posts/');

class DataHandling {
    createNewPost(name, category, title, description, tag) {
        const newPost = postsRef.push();
        const date = new Date().toLocaleString('de-DE', { hour12: false });

        const path = category === 'search' ? '/' : '/offer';

        newPost
            .set({
                user: userId,
                name: name,
                category: category,
                title: title,
                description: description,
                tag: tag,
                time: date
            })
            .then(history.push(path));
    }

    addDataChangeListener(locationName, listener) {
        const location = database.ref(locationName);
        location.on('value', listener, this.errData);
    }

    errData(error) {
        console.error(error);
    }

    addNameToUser(userId, name) {
        firebase
            .database()
            .ref('users/' + userId)
            .set({
                username: name
            });
    }
}

export default new DataHandling();
