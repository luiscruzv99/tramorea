const getPosts = async () => {
    const posts = import.meta.glob('/src/routes/blog/blogEntries/*.md');
    const postIter = Object.entries(posts);

    const postContents = await Promise.all(
        postIter.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = '/blog' + path.slice(28, -3);

            return {
                meta: metadata,
                path: postPath,
            };

        })
    )

    return { postContents };
}


export const orderPosts = async () => {
    const { postContents } = await getPosts();

    const orderedPosts = postContents.sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date);
    })

    return { orderedPosts };

}

export const lastPost = async () => {
    const { orderedPosts } = await orderPosts();
    const last = orderedPosts[0];

    return { last }
}

export const getTags = async () => {
    const { postContents } = await getPosts();
    const tags = [... new Set(postContents.flatMap(a => a.meta.tags))];

    return { tags };
}

export const getPostsWithTag = async (tag) => {
    const { postContents } = await getPosts();

    const taggedPosts = postContents.filter(a => a.meta.tags.includes(tag))

    return { taggedPosts };

}
