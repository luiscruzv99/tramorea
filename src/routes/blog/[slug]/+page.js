// @ts-ignore
export async function load({ params }) {
    // @ts-ignore
    const post = await import(`../blogEntries/${params.slug}.md`);
    // @ts-ignore
    try {
        const { title, date, tags } = post.metadata;
        const content = post.default;

        return {
            content,
            title,
            date, 
            tags
        }
    } catch (error) {
        return {};
    }


}