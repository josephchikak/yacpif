// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc,} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your sweb app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcrL-3uEXmBPJgsaHUp3kG3SZHYSnPXG0",
  authDomain: "yacpif-7bf9e.firebaseapp.com",
  projectId: "yacpif-7bf9e",
  storageBucket: "yacpif-7bf9e.appspot.com",
  messagingSenderId: "717426779634",
  appId: "1:717426779634:web:ff35f4ad63f6976f41776b",
  measurementId: "G-VQ4LV9SJ40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const storage = getStorage(app)

const articles = doc(db, 'aticles/peaceBanner')

const writeArticle = () => {
  const docData = {
    description: 'Peace Banner',
    body: `YACPIF hosted Peace Cup 2010 on 21 December 2010 at Bukuru Mini-Stadium. The winning teams from the Jos North and Jos South Peace Cup Camps (posted about here) played in a tournament football match. A peace rally accompanied the football match.

    The program opened with prayers by both Christians and Muslims and the Nigerian anthem was played by the Police Band. After introductions, the Jos North and Jos South teams marched into the stadium. The players marched in by twos, a Jos North player holding hands with a Jos South player in a sign of unity.

    Reverend Yakubu Pam, the CEO of YACIF, gave the welcoming address. He stressed that the purpose of Peace Cup 2010 was to unify Christians and Muslims in peace. He also challenged the politicians not to use violence.
  
    JAPS, a Hausa-Muslim musical group, shared a few songs. A number of dignitaries also gave brief welcoming speeches. One woman shared, “We are here on behalf of mothers. We mothers are tired of this violence. We are tired of burying our sons. We mothers, both Christians and Muslims, are united in our opposition to any further violence.” The speeches were concluded with songs by Threadstone, a local inter-ethnic Christian band.
    
    After the speeches, councilors of Jos North LGA and Jos South LGA played in a novelty football match that ended in a 0-0 draw.
    
    Leaders of four political parties signed a one-page pledge to support peace and renounce all kinds of violence. Then Jeremiah Gyang, an internationally acclaimed singer from Jos, sang three songs.
    
    After Jeremiah Gyang’s performance, the main football match between Jos North and Jos South began. With 15 minutes left in the match, Jos North was ahead 3 – 2. A foul was committed in the box by Jos North. Jos South scored on the penalty shot, tying the score 3-3. The match went into penalty shoot-out. Both Jos North and Jos South scored their first two opportunities. However, the Jos South goalie blocked the third and fifth shots from Jos North, so Jos South won the shoot-out 4-3. There was pandemonium in the stadium with people streaming into the field, jumping and shouting to rejoice with the Jos South players. You would have thought they had just won the World Cup.

    Both teams received medals. The Jos South team also received a Peace Cup trophy. Professor Danny McCain concluded Peace Cup 2010 with the following words, “Ladies and gentleman, thank you for coming and supporting this wonderful occasion. We congratulate Jos South on winning the Peace Cup but the real winners today were the people of Jos and Bukuru. We believe that peace has been pushed forward a bit today. Thank you all for coming and helping to do that. God bless.”`
  }
  setDoc(articles, docData )
}

console.log('holla')
writeArticle();
