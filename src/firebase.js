import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'

const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: import.meta.env.AUTH_DOMAIN,
  databaseURL: import.meta.env.DATABASE_URL,
  projectId: 'yacpif-184fa',
  storageBucket: import.meta.env.STORAGE_BUCKET,
  messagingSenderId: import.meta.env.MESSAGE_SENDER_ID,
  appId: import.meta.env.APP_ID,
  measurementId: import.meta.env.MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
const postsRef = ref(db, 'posts/')

const onValuePromise = (query) => new Promise((resolve, reject) => {
  onValue(query, (snapshot) => {
    resolve(snapshot.val())
  }, (error) => {
    reject(error)
  })
})

const getAllPosts = async () => {
  let resObj = { foo: 'bar' }
  try {
    const posts = await onValuePromise(postsRef)
    resObj.posts = posts
    return resObj
  } catch (error) {
    console.error(error)
    return error
  }
}

// function getAllPosts() {
//   let dbObj = { hello: 'world' }
//   onValue(postsRef, (snp) => {
//     dbObj.posts = snp.val()
//     console.log(snp.val())
//   })
//   console.log(dbObj.posts)
//   return dbObj
// }

export { getAllPosts }

// export function getAllPosts() {
//   onValue(
//     postsRef,
//     (snapshot) => {
//       const data = snapshot.val()
//       return data
//     },
//     (error) => {
//       return error
//     }
//   )
// }
