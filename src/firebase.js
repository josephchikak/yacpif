import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue, query, orderByChild } from 'firebase/database'

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

const getListOnValuePromise = (query) =>
  new Promise((resolve, reject) => {
    onValue(
      query,
      (snapshot) => {
        let arr = []
        snapshot.forEach((ch) => {
          arr.push({ key: ch.key, value: ch.val() })
        })
        // console.log(snapshot)
        resolve(arr)
      },
      (error) => {
        reject(error)
      }, { onlyOnce: true }
    )
  })

const getChildOnValuePromise = (query) =>
  new Promise((resolve, reject) => {
    onValue(
      query,
      (snapshot) => {
        resolve({ key: snapshot.key, value: snapshot.val() })
      },
      (error) => {
        console.error('getChildOnValuePromise error: ', error)
        reject(error)
      },
      { onlyOnce: true }
    )
  })

const getChildListOnValuePromise = (query) =>
  new Promise((resolve, reject) => {
    onValue(
      query,
      (snapshot) => {
        let arr = []
        snapshot.forEach((ch) => {
          arr.push(ch.key)
        })
        resolve(arr)
      },
      (error) => {
        console.error('getChildListOnValuePromise: ', error)
        reject(error)
      },
      { onlyOnce: true }
    )
  })

// returns an array of all the posts in the database
const getAllPosts = async () => {
  try {
    const posts = await getListOnValuePromise(postsRef)
    return posts
  } catch (error) {
    console.error(error)
    return error
  }
}

// returns an array of all the posts in the database ordered by timestamp
const getAllPostsOrderedByTimestamp = async () => {
  const orderedTimestapPosts = query(ref(db, 'posts'), orderByChild('timestamp'))
  try {
    const posts = await getListOnValuePromise(orderedTimestapPosts)
    return posts
  } catch (error) {
    console.error(error)
    return error
  }
}

// returns the post with the provided id
const getPostwithID = async (postId) => {
  const postRef = ref(db, 'posts/' + postId)
  try {
    const post = await getChildOnValuePromise(postRef)
    return post
  } catch (error) {
    console.error(error)
    return error
  }
}

// returns an array of all the photo keys in the post with the provided id
const getPostPhotosKeys = async (postId) => {
  const postsPhotosRef = ref(db, 'posts/' + postId + '/photos')
  try {
    const photokeys = await getChildListOnValuePromise(postsPhotosRef)
    return photokeys
  } catch (error) {
    console.log(error)
    return error
  }
}
// returns an array of all the tag keys in the post with the provided id
const getPostTagsKeys = async (postId) => {
  const postsTagsRef = ref(db, 'posts/' + postId + '/tags')
  try {
    const tagKeys = await getChildListOnValuePromise(postsTagsRef)
    return tagKeys
  } catch (error) {
    console.error(error)
    return error
  }
}

// returns the photo with the provided id
const getPhotoWithId = async (photoId) => {
  const photoRef = ref(db, 'photos/' + photoId)
  try {
    const photo = await getChildOnValuePromise(photoRef)
    return photo
  } catch (error) {
    console.error(error)
    return error
  }
}

// returns the tag with the provided id
const getTagWithId = async (tagId) => {
  const tagRef = ref(db, 'tags/' + tagId)
  try {
    const tag = await getChildOnValuePromise(tagRef)
    return tag
  } catch (error) {
    console.error(error)
    return error
  }
}

// returns an array of all the post keys in the tag with the provided id
const getTagPostsKeys = async (tagId) => {
  const tagPostsRef = ref(db, `tags/${tagId}/posts`)
  try {
    const postKeys = getChildListOnValuePromise(tagPostsRef)
    return postKeys
  } catch (error) {
    console.error(error)
    return error
  }
}

export {
  getAllPosts,
  getPostwithID,
  getPostPhotosKeys,
  getAllPostsOrderedByTimestamp,
  getPostTagsKeys,
  getPhotoWithId,
  getTagWithId,
  getTagPostsKeys
}
