import { initializeApp } from 'firebase';

const app = initializeApp({
    
        apiKey: "AIzaSyC_JV1v-zLbwROx9ZpYyjDJC-Z91vDqNgQ",
        authDomain: "lowlife-b5747.firebaseapp.com",
        databaseURL: "https://lowlife-b5747.firebaseio.com",
        projectId: "lowlife-b5747",
        storageBucket: "lowlife-b5747.appspot.com",
        messagingSenderId: "1062228636374"
      
});

export default app;
export const db = app.database();
export const galleryRef = db.ref('gallery');
export const eventsRef = db.ref('events');
export const merchRef = db.ref('merchandise');
export const homePageNotifsRef = db.ref('homePageNotifs');
export const mediaRef = db.ref('media');
export const storage = app.storage();

