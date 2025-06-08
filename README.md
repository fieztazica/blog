# 📘 My Personal Blog

A modern, responsive blog built with **Next.js** and **TypeScript**, featuring Markdown-powered posts and optimized for performance and SEO.

---

## 🎯 Features
- **Markdown support**: Write posts in `.md` or `.mdx` with front‑matter.
- **Static generation** with `getStaticProps` & `getStaticPaths`
- **SEO‑friendly** with `<head>` meta tags and Open Graph support
- **Responsive design** using CSS Modules / Tailwind / Styled Components
- **Syntax highlighting** for code blocks
- **RSS feed** and sitemap generation
- Easily **deployable** on Vercel, Netlify, or any static host

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/fieztazica/blog.git
cd blog
````

### 2. Install dependencies

```bash
npm install
# or
npm ci
# or
yarn install
```

### 3. Local development

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
npm run build
npm run serve
# or
yarn build && yarn serve
```
---

## ⚙️ Configuration

* **Edit site metadata** in `site.config.ts` (title, description, author, social links).
* **Styling**: Switch between CSS Modules, Tailwind, or styled-components depending on setup.
* **Markdown extensions**: Configure MDX plugins and syntax highlighter themes in `next.config.js`.

---

## ✅ Publishing a New Post

1. Create a new `.md` / `.mdx` file under `data/blog/`, e.g. `2025-06-08‑my‑new‑post.md`.
2. Use front‑matter:

   ```md
   ---
   title: "My New Post"
   date: "2025-06-08"
   summary: "A short summary of the post."
   tags: ["typescript", "nextjs", "blog"]
   ---
   ```
3. Write content using Markdown.
4. Run `npm start` to regenerate pages.
5. Deploy to your hosting provider (e.g. Vercel with auto‑deploy on push).

---

## 📦 Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run start`   | Run development server              |
| `npm run build`   | Generate optimized production build |
| `npm run serve`   | Start production server             |
| `npm run lint`    | Run ESLint and format               |
| `npm run prepare` | Run Husky                           |

---

## ✌️ Contributing

Contributions and improvements are welcome! Feel free to open issues or submit PRs.
Make sure to run linters and formatters before committing:

```bash
npm run lint
```

---

## 📝 License

This project is [MIT licensed](LICENSE).

---

## 📬 Contact

Built by [@fieztazica](https://github.com/fieztazica) with the [timlrx's tailwind-nextjs-starter-blog](https://timlrx.github.io/tailwind-nextjs-starter-blog/).

Check my personal site [tiendat.id.vn](https://tiendat.id.vn).

---

Thanks for stopping by! 🚀
