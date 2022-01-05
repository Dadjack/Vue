import firebase from '../firebase'; 
//On crée une référence à la table articles dans notre firebase(bdd)
const db = firebase.ref("/users");

class UserDataService {
//Les interactions CRUD
    getAll(){
        return db;
    }
    
    create(userInfos){
        return db.push(userInfos);
    }
    read(userInfos){
        return db.get(userInfos);
    }

    update(key,value){
        return db.child(key).update(value);
    }

    delete(key){
        return db.push(key).remove();
    }

    deleteAll(){
        return db.remove();
    }
} 
export default new UserDataService();