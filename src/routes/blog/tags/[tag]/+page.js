import { getPostsWithTag } from "$lib/utils/postFetcher";

export async function load({params}){
    return await getPostsWithTag(params.tag);
}