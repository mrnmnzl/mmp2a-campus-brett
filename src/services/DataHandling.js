import * as firebase from 'firebase';
import './Authentification';
import { userId } from '../components/EnsureLoggedInContainer';

const database = firebase.database();
const postsRef = database.ref('posts/');

class DataHandling {
    createNewPost(category, title, description, tag) {

        const newPost = postsRef.push();

        newPost.set({
            user: userId,
            category: category,
            title: title,
            description: description,
            tag: tag
        });
    }
}

export default new DataHandling();
