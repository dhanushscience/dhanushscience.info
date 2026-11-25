# dhanushscience.info

Personal website of Dhanush S. (Dhanush Science).

- `public/index.html`: the home page (static, copied as-is).
- `src/content/blog/*.md`: blog posts. Images go in `public/images/blog/`.
- Astro builds `/blog` and each post; GitHub Actions (`.github/workflows/deploy.yml`) deploys on every push to `main`.

## Writing a post

1. Go to https://app.pagescms.org, sign in with GitHub, open this repo.
2. Blog posts -> Add an entry. Fill title, short description, date, cover image, then write the post.
   Use the toolbar image button to add pictures inside the text.
3. Save. The site rebuilds and the post is live at `/blog/<title>/` in about a minute.

Set "Draft" on to keep a post hidden. Without the CMS: add `src/content/blog/<name>.md` with the same front matter as `hello-world.md`.

Local preview: `npm install`, `npm run dev`, open http://localhost:4321/blog/.
