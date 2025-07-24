// @ts-nocheck
import { getTags, lastPost } from "$lib/utils/postFetcher"

export const load = async () => {
   const { last } = await lastPost();
   const { tags } = await getTags();

   return {last, tags};
}