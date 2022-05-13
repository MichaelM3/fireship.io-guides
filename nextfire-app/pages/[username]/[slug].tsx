import Link from 'next/link';
import React from 'react'

const PostPage = () => {
    return (
        <main>
           <Link
                prefetch={false}
                href={{
                    pathname: '/[username]',
                    query: { username: 'mike' }
                }}
           >
                <a>Mike's Profile</a>
           </Link>
        </main>
    )
}

export default PostPage;
