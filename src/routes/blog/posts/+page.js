// @ts-nocheck
import { getTags, orderPosts } from "$lib/utils/postFetcher"

export const load = async () => {
   const { orderedPosts } = await orderPosts();
   const { tags } = await getTags();

   return {orderedPosts, tags};
}