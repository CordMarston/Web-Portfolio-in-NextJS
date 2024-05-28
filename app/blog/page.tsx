import PostsTable from "../components/blog/PostsTable";
import AuthButtons from "../components/ui/auth/AuthButtons";
import { auth } from "@/lib/auth";

export default async function BlogHome() {
    const session = await auth()

    return (
        <div className="m-auto w-auto">
          {session ? <PostsTable/> : <AuthButtons/>}
        </div>
    );
}