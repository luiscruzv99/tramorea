// @ts-nocheck
import { orderPosts} from "$lib/utils/postFetcher"

export const load = async () =>{
   return await orderPosts();
}