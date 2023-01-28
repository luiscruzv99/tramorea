---
title: "How I built and deployed my static site on a non-existent budget"
date: 1/30/2023
tags: [coding, webdev]
---

## 1. The idea

Even though the first post in this blog is from Jan this year, and the website itself has just been up for a couple of months, the idea for this personal project has been in the works for far longer. It's not the first time I've tried to create my personal webpage, although most of my tries involved vanilla html and css, which I always ended up abandoning. However, this last time it was different, the perfect storm of inspirations struck me. 

Back during June of this year, I had to do an assignment for a subject of my masters degree, which involved using angular. Although not my favourite js framework, I got really easily into the flow and, when I finished with the subject, it left me wanting more. So after reading a little bit of research on other frameworks I chose Svelte and SvelteKit for my next experiment, which at the time had not yet planned.

About a month later, during summer, I started to read up on [Randy](https://randy.gg)'s website, specifically his changelog series, in which he gave a snippet of his daily life, mixed with some reflections, on a weekly basis. Seeing how he had his web setup, with the blog and the changelog, I got ~~kinda jealous~~ inspired, and decided that I "would like to have some of that as well, please".

However, there were a few things that held me back from realising the idea of having my own little personal trash fire of a website. The first being: I'm a student (at the time I was looking for an internship, but had no luck), I have **no extra money**, I haven't hosted a web, and _shit(the internet)'s scary, man_. On top of that, I had never used Svelte before, though I knew a bit about webdev. So I decided to give it a rest for the time being, while I did some research and learned about svelte, static sites and free hosting during the rest of the summer.

Then in September, things kicked off. I was still on "holidays" from my masters, and I was looking for interships in organisations and it seemed like nobody was interested in contracting me. So, I decided to use some of my free time to build off a personal portfolio website, to serve as a little addendum to my CV. After revamping a little bit my [github profile](https://github.com/luiscruzv99), I came up with a plan on how to make the website, make it static yet somewhat interactive and appealing, and deploy it, all for **free**.

## 2. But, how tho?

In order to have my page hosted for free I considered a few options, like Firebase (since I had some experience using it for web projects); however, this platform in particular has quotas for traffic in its free tier, and its terms of service state that you can't use it for personal reasons, like hosting a personal webpage (and I'm a good boi). In the end, i chose the easiest alternative, taking advantage of the github pages to host the web, not at all a revolutionary idea, a lot of people (like my buddy [Sergio](https://sergioquijanorey.github.io/)) have their own blog on gh-pages.

Since I'm _not like the other programmers_, I didn't want to go the Hugo or Jekyll route and just have a collection of markdown files rendered into html with a plain theme, I wanted something with ✨_**pizzazz**_✨. Therefore, I chose to develop my page using Svelte and Tailwindcss (because I suck at vanilla css). This was because Svelte (via SvelteKit) allowed me to render everything into static pages, allowing me to deploy them to gh-pages without a hassle. Also, components are good and plain html is pain.

However, this does not really work for the blog, because it would mean that I would have to write blog posts in html files (or rather `.svelte` files inside their corresponding routes), which would be slow and cumbersome. Enter [mdsvex](https://mdsvex.com/), a plugin that renders markdown files into html for svelte (I followed some tutorials in order to set this up, but the main one I used was [this one](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog), by Josh Collinsworth). 

...But, wait a minute, didn't you just said that you didn't want a page that was just rendered md files?? 

Yes, but mdsvex is not like Hugo or tools like it, since it integrates into svelte, and allows for a really fine control of style and layout via custom components and by leveraging svelte features, like inline scripting (check the console of the page).
<script>
    console.log("Hey, you checked me out!")
</script>

Finally, to make deploying the static pages to my gh-pages, I decided to use [Buddy](https://buddy.works) as a way to automatize the building process. I chose it because it is _mostly_ free (it has monthly quotas for utilization, so you can't do as many executions as you want, but meh) and setting up the actions (or pipelines) is very easy and intuitive. I'm sure it has a lot of limitations, but for a light project like this is more than enough.

## 3. Duct-taping it all together

I'm not gonna lie, making it all work was kind of a pain in the ass, but that's more on me being a sloppy programmer, rather than anything else. However, once that everything was set up, it was actually nice being able to write plain markdown and instantly see your changes on the web preview. It's also nice to be able to push my work to my repo and have it up and running in my gh-pages in a matter of minutes without having to worry (_too much_) about anything.

Down below is a diagram on how the process works.

- Diagram

## 4. Shortcomings

As you may have deduced from my explanations, my approach is not free of downsides; in fact, it has quite a few, the first of them being the lack of interactivity. Since I have no real server behind my web (just github's CDN), I have no way to make it as interactive as other web or blog sites (I can't add a comment section, for example). Nevertheless, I still can do some **dank** shit with the little client-side javascript I can add to my svelte pages (or I could if I really knew my way around js).

The other downside, and this could be more serious, is the dependence on "free" platforms, like Buddy. It's cool that I can forget about publishing the web and have it automagically done by some server gremlins somewhere in the world when I'm not looking. But that relies on those gremlins working for free forever, and I don't think that is a sure thing to happen. So, until I come up with a better (and still free) idea, I will have to be prepared to shift back to doing the publishing manually at any time.

## 5. Future plans

Honestly, I'd like this to be a kind of a back-burner project that I tinker with and improve over the time slowly. There are already plenty of things that I want to improve, but at the same time there are other project ideas bouncing around in my empty skull that I'd like to start (or resume as well). This means that the content here will be slowly drip fed.

Nevertheless, I am keeping a TODO list of all the things I want to have done before the _start of the summer_, like:
- Fixing bugs: specially the wonky nav menu in mobile view

- Gradually drift away from TailwindCSS: it's not that I don't like it, I just want to get better at vanilla CSS

- Accesibility update (alt descriptions, etc): I want the site to be a little more friendly to navigate for everybody

- Dark theme: so that my eyes don't melt away when I work on the page at night with my lights off

- Projects page: I haven't even started it, but it is kind of the point of having a _**portfolio**_ website

- Improve the image carrousel: right now it's in an _okay_ state, but I'd like it to be more refined and for it to work correctly on chrome

Anyways, I'll try to post content regularly on the blog so that I don't forget that this project exists, let's aim for ... A publication a month, sound good? I don't care if it doesn't, this is more for me than for anyone who might be remotely interested in what I have to say.

Enjoy the rest of the day, week, month or whatever time scale you wanna use.

See ya!





-
