import { getPostsWithTag } from "$lib/utils/postFetcher";

export async function load({ params }) {
    const { taggedPosts } = await getPostsWithTag(params.tag);
    const tag = params.tag;
    return { tag, taggedPosts };
}