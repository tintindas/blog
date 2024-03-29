---
title: Making this blog
date: 2022-06-09
subtitle: Pretty meta post right? A blog post about the creation of said blog.
hook: On building this blog. I talk about my motivation for creating this blog, the tech I used to do it etc. It's mostly a test post so I had something to work with and was not only rendering out empty arrays.
---

<!-- TODO: Rewrite post -->

# Making this blog

#### Making this blog

## The Why

Why make a blog anyway? It's not like anyone is ever going to read it. Blogs are so 2005. Realistically, if I want an audience I should start a Tiktok page (channel?) or something.

To be quite honest, the only reason I am creating this blog is to procrastinate doing some homework. I really should be studying some Computer Graphics at the moment instead of whatever it is I am doing. But who am I to stop myself from indulging in some sweet sweet self-destructive behaviour.

## The What

**What will this be?**

- Documentation for the projects I hope to build in the coming years.
- A diary of sorts to note down my thoughts about topics in tech which interest me.
- Maybe even some random thoughts about life in general.

## The How

### Progress

✅ Setup SvelteKit project with mdsvex <br>
✅ Make an Index page which shows all posts. <br>
✅ Make an initial post. <br>
🚝 Add styles. <br>
🚝 Use Github Actions and Github Pages to deploy and host as a static site. <br>

### Basic Setup

I am using **SvelteKit** as a static site generator to build this blog. Honestly, this is my first time using **Svelte** and it has been an absolute pleasure.

Why SvelteKit? Because I felt like it. And Next.js is just too much of a hassle for creating a simple blog. And tbh, React is a bit of a pain to work with now. Also, Svelte has cool animation capabilities built into it. I flipping love transitions.

The actual posts are written in **Markdown** and I am using **mdsvex** which lets you do cool things like import Svelte components into your markdown files as a preprocessor.

![Blog Post without any styling](./blog_initial.png)

The plan is to use Github Actions to build the site everytime I push a change and then host it on Github Pages. What can I say I am team Octocat all the way.

## Styling

### Tech Stack

- Svelte
- SvelteKit
- mdsvex

---
