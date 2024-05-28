import Link from "next/link";

export default function PostsTable() {
    return (
        <div className="">
            <Link href="blog/posts/new">+ Post</Link>
        </div>
    )
}