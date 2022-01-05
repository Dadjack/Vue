import Firebase from 'firebase/app';
import 'firebase/firestore';
import fsConfig from './config';

const config = fsConfig;

const App = Firebase.initializeApp(config);
const Firestore = App.firestore();
Firestore.settings({ timestampsInSnapshots: true });
const options = {
    source: 'server',
};

export default {
    create(user) {
        return Firestore.collection('users').add(user);
    },
    read() {
        return Firestore.collection('users').get(options);
    },
    update(user) {
        return Firestore.collection('users').doc(user.id).update({ ...user });
    },
    replace(user) {
        return Firestore.collection('users').doc(user.id).set({ user });
    },
    delete(id) {
        return Firestore.collection('users').doc(id).delete();
    },
};