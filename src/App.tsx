import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post, PostType } from "./components/Post"

import "./global.css"
import styles from "./App.module.css"

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/felipe-hvsilva.png",
      name: "Felipe Silva",
      role: "Frontend Developer",
    },
    content: [
      { type: "paragraph", content: "Fala Galera" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no protifa. É um projeto que fiz no NLW Return, evento da Rocketseat ",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator",
    },
    content: [
      { type: "paragraph", content: "Fala Galera" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no protifa. É um projeto que fiz no NLW Return, evento da Rocketseat ",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-04-29 20:00:00"),
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </>
  )
}
