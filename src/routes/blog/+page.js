// @ts-nocheck
import { lastPost } from "$lib/utils/postFetcher"

export const load = async () => {
   return await lastPost();
}