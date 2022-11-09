import Link from "next/link"

export default function BlogPost ({postTitle, postContent}) {
  return (
    <div className="post-container">
      <h1>{postTitle}</h1>
      <p>{postContent}</p>
      <p className="post-more">
        <Link href="#">
          <span>Read More</span>
        </Link>
        <Link href="#">
          <span>Listen</span>
        </Link>
        <Link href="#">
          <span>Watch</span>
        </Link>
      </p>
    </div>
  )
}