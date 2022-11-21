import { getTags } from "$lib/utils/postFetcher"

export const load = () => {
  return getTags();
}