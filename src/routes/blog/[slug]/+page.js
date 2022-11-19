

// @ts-ignore
export async function load({ params }) {
    // @ts-ignore
    const post = await import(`../blogEntries/${params.slug}.md`);
    // @ts-ignore
    try {
        const { title, date } = post.metadata;
        const content = post.default;

        return {
            content,
            title,
            date
        }
    } catch (error) {
        return {};
    }


}