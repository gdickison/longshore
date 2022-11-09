import BlogPost from "./BlogPost"
import Link from "next/link"

export default function Blog () {
  const topics = [
    'Lorem ipsum',
    'Lorem',
    'Lorem dix',
    'Lorem lorem',
    'Dix',
    'Lorem sunt',
    'Lorem ipsum',
    'Lorem',
    'Lorem dix',
    'Lorem lorem',
    'Dix',
    'Lorem sunt',
    'Lorem ipsum',
    'Lorem',
    'Lorem dix',
    'Lorem lorem',
    'Dix',
    'Lorem sunt',
    'Lorem ipsum',
    'Lorem',
    'Lorem dix',
    'Lorem lorem',
    'Dix',
    'Lorem sunt',
    'Lorem ipsum',
    'Lorem',
    'Lorem dix',
    'Lorem lorem',
    'Dix',
    'Lorem sunt',
    'Lorem ipsum',
    'Lorem',
    'Lorem dix',
    'Lorem lorem',
    'Dix',
    'Lorem sunt',
    'Lorem ipsum',
    'Lorem',
    'Lorem dix',
    'Lorem lorem',
    'Dix',
    'Lorem sunt',
    'Lorem ipsum',
    'Lorem',
    'Lorem dix',
    'Lorem lorem',
    'Dix',
    'Lorem sunt',
    'Lorem ipsum',
    'Lorem',
    'Lorem dix',
    'Lorem lorem',
    'Dix',
    'Lorem sunt',
    'Lorem ipsum',
    'Lorem',
    'Lorem dix',
    'Lorem lorem',
    'Dix',
    'Lorem sunt'
  ]
  return (
    <div className="blog-container">
      <div className="left-side">
        <h1 className="blog-container-title">Latest Articles</h1>
        <div className="blog-posts">
          <BlogPost
            postTitle={'Post One'}
            postContent={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quas ut a numquam qui deleniti quibusdam iure repellat quae repellendus veniam saepe quis debitis explicabo voluptas, dicta rem dolorum nisi...'}
          />
          <BlogPost
            postTitle={'Post Two'}
            postContent={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quas ut a numquam qui deleniti quibusdam iure repellat quae repellendus veniam saepe quis debitis explicabo voluptas, dicta rem dolorum nisi...'}
          />
          <BlogPost
            postTitle={'Post Three'}
            postContent={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quas ut a numquam qui deleniti quibusdam iure repellat quae repellendus veniam saepe quis debitis explicabo voluptas, dicta rem dolorum nisi...'}
          />
          <BlogPost
            postTitle={'Post Four'}
            postContent={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quas ut a numquam qui deleniti quibusdam iure repellat quae repellendus veniam saepe quis debitis explicabo voluptas, dicta rem dolorum nisi...'}
          />
          <BlogPost
            postTitle={'Post Five'}
            postContent={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quas ut a numquam qui deleniti quibusdam iure repellat quae repellendus veniam saepe quis debitis explicabo voluptas, dicta rem dolorum nisi...'}
          />
        </div>
          <div className="blog-container-see-all">
            <Link href="/">
              <h2>
                See All Posts
              </h2>
            </Link>
          </div>
      </div>
      <div className="right-side">
        <h1 className="blog-container-title">Search & Filter</h1>
        <div className="search-box">
          <h3>Search by Keyword</h3>
          <input type="text" />
        </div>
        <div className="search-box">
          <h3>Search by Book of the Bible</h3>
          <input type="text" />
        </div>
        <div className="search-box">
          <h3>Pick a Topic</h3>
          <div className="topics">
            {topics.map((topic, idx) => {
              return (
                <button key={idx}>{topic}</button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}